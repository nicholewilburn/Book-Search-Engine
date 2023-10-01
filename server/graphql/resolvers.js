const { createUser, login, saveBook, deleteBook } = require('../controllers/user-controller');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth'); // Import your signToken function

const resolvers = {
  Query: {
    // Define query resolvers here (e.g., getSingleUser).
    me: async (_, __, context) => {
      // Check if the user is authenticated (use context.user)
      if (!context.user) {
        throw new AuthenticationError('You must be logged in to access your profile');
      }
      // Return the authenticated user's data
      return context.user;
    },
  },
  Mutation: {
    addUser: async (_, args) => {
      try {
        const user = await createUser(args);
        // Generate a token for the new user
        const token = signToken(user);
        // Return user data and token
        return { user, token };
      } catch (error) {
        // Handle error appropriately
        throw new AuthenticationError('Error creating user');
      }
    },
    login: async (_, args) => {
      try {
        const user = await login(args);
        // Generate a token for the logged-in user
        const token = signToken(user);
        // Return user data and token
        return { user, token };
      } catch (error) {
        // Handle error appropriately
        throw new AuthenticationError('Error logging in');
      }
    },
    saveBook: async (_, args, context) => {
      // Check if the user is authenticated (use context.user)
      if (!context.user) {
        throw new AuthenticationError('You must be logged in to save a book');
      }
      try {
        const updatedUser = await saveBook({ user: context.user, body: args });
        // Return the updated user here
        return updatedUser;
      } catch (error) {
        // Handle error appropriately
        throw new Error('Error saving book');
      }
    },
    deleteBook: async (_, { bookId }, context) => {
      // Check if the user is authenticated (use context.user)
      if (!context.user) {
        throw new AuthenticationError('You must be logged in to delete a book');
      }
      try {
        const updatedUser = await deleteBook({ user: context.user, params: { bookId } });
        // Return the updated user here
        return updatedUser;
      } catch (error) {
        // Handle error appropriately
        throw new Error('Error deleting book');
      }
    },
  },
};

module.exports = resolvers;