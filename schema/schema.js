const {
  GraphQLObjectType,
  GraphQLSchema,
} = require('graphql');

const { users, user, addUser, updateUser, deleteUser } = require('./user');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    users,
    user,
  }
});

// Mutations
const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    // Add a user
    addUser,
    // Update user
    updateUser,
    // Delete a user
    deleteUser,
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});