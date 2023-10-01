const router = require('express').Router();
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('../../graphql'); // Import your GraphQL schema and resolvers
const { authMiddleware } = require('../../utils/auth'); // Import your authentication middleware

// Create an instance of Apollo Server with typeDefs, resolvers, and context
const server = new ApolloServer({
  typeDefs, // Import your GraphQL type definitions (schema)
  resolvers, // Import your GraphQL resolvers
  context: authMiddleware, // Use your authentication middleware in the context
});

// Apply Apollo Server as middleware to the Express router
server.applyMiddleware({ app: router });

module.exports = router;