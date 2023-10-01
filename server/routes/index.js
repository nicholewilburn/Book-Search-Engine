const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('../graphql'); // Update the import path
const { authMiddleware } = require('../utils/auth'); // Import your authentication middleware
const { apolloServer } = require('../server'); // Import the Apollo Server instance

// Create an instance of Apollo Server with typeDefs, resolvers, and context
const server = new ApolloServer({
  typeDefs, // Import your GraphQL type definitions (schema)
  resolvers, // Import your GraphQL resolvers
  context: authMiddleware, // Use your authentication middleware in the context
});

// Apply Apollo Server as middleware to Express
server.applyMiddleware({ app: router });

// Use your API routes
router.use('/api', apiRoutes);

// Serve up React front-end in production
router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../../client/dist/index.html')); // Ensure the correct path to your React build directory
});

module.exports = router;