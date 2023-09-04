const {
  GraphQLObjectType,
  GraphQLSchema,
} = require('graphql');

const { users, user, addUser, updateUser, deleteUser } = require('./user');
const { portfolios, portfolio, addPortfolio, updatePortfolio, deletePortfolio } = require('./portfolio');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    users,
    user,
    portfolios,
    portfolio,
  }
});

// Mutations
const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser, // Add user
    updateUser, // Update user
    deleteUser, // Delete user
    addPortfolio, // Add portfolio
    updatePortfolio, // Update portfolio
    deletePortfolio, // Delete portfolio
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});