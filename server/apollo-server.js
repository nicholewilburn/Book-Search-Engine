const { ApolloServer } = require('apollo-server');
const { typeDefs, resolvers } = require('./graphql'); // Import your GraphQL schema definitions
const express = require('express');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server is running at ${url}`);
});

// server.applyMiddleware({ app, path: './graphql' }); // Specify the path here