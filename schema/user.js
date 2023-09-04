const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
} = require('graphql');

// Mongoose model
const { User } = require('../models/user');

// User Type
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
  })
});

const users = {
  type: new GraphQLList(UserType),
  resolve(parent, args) {
    return User.find();
  }
};

const user = {
  type: UserType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return User.findById(args.id)
  }
};

// Add a user
const addUser = {
  type: UserType,
  args: {
    username: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve(parent, args) {
    const user = new User({
      username: args.username,
      email: args.email,
    });

    return user.save();
  }
};

// Update user
const updateUser = {
  type: UserType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
  },
  resolve(parent, args) {
    return User.findByIdAndUpdate(
      args.id,
      {
        $set: {
          username: args.username,
          email: args.email,
        }
      },
      { new: true }
    );
  }
};

// Delete a user
const deleteUser = {
  type: UserType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) }
  },
  resolve(parent, args) {
    return User.findByIdAndRemove(args.id);
  }
};

module.exports = {
  UserType,
  users,
  user,
  addUser,
  updateUser,
  deleteUser,
};