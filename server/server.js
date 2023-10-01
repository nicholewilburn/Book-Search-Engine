const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const http = require('http');

const typeDefs = `
  type Query {
    totalPosts: Int!
  }
`;

const resolvers = {
  Query: {
    totalPosts: () => 100,
  },
};

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  const app = express();

  server.applyMiddleware({ app });

  const httpServer = http.createServer(app);

  app.get('/rest', (req, res) => {
    res.json({ data: 'API working' });
  });

  httpServer.listen({ port: 3001 }, () => {
    console.log(`Server is running on http://localhost:3001`);
    console.log(`GraphQL path is ${server.graphqlPath}`);
  });
}

startServer();