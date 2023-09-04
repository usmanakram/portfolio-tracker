const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull
} = require('graphql');

// Mongoose model
const { Portfolio } = require('../models/portfolio');
const { User } = require('../models/user');

const { UserType } = require('./user');

// Portfolio Type
const PortfolioType = new GraphQLObjectType({
  name: 'Portfolio',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    user: {
      type: UserType,
      resolve(parent, args) {
        return User.findById(parent.user);
      }
    },
  })
});

const portfolios = {
  type: new GraphQLList(PortfolioType),
  resolve(parent, args) {
    return Portfolio.find();
  }
};

const portfolio = {
  type: PortfolioType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return Portfolio.findById(args.id);
  }
};

// Add a portfolio
const addPortfolio = {
  type: PortfolioType,
  args: {
    user: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve(parent, args) {
    const portfolio = new Portfolio({
      user: args.user,
      name: args.name,
      description: args.description,
    });

    return portfolio.save();
  }
};

// Update portfolio
const updatePortfolio = {
  type: PortfolioType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    user: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve(parent, args) {
    return Portfolio.findByIdAndUpdate(
      args.id,
      {
        $set: {
          user: args.user,
          name: args.name,
          description: args.description,
        }
      },
      { new: true }
    );
  }
};

// Delete portfolio
const deletePortfolio = {
  type: PortfolioType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) }
  },
  resolve(parent, args) {
    return Portfolio.findByIdAndRemove(args.id);
  }
};

module.exports = {
  PortfolioType,
  portfolios,
  portfolio,
  addPortfolio,
  updatePortfolio,
  deletePortfolio,
};