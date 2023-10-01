const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const db = require('./config/connection');
const routes = require('./routes');
const { typeDefs, resolvers } = require('./graphql'); // Import your GraphQL schema and resolvers

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Initialize Apollo Server with typeDefs and resolvers
const apolloServer = new ApolloServer({
  typeDefs, // Import your GraphQL type definitions (schema)
  resolvers, // Import your GraphQL resolvers
});

// Apply Apollo Server as middleware to Express
apolloServer.applyMiddleware({ app });

// If we're in production, serve client/dist as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
}

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});

module.exports = { apolloServer }; // Export the Apollo Server instance