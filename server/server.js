const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const http = require('http');
const path = require('path');

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

  // Serve the React app as the entry point from the 'client' directory
  app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));
  
  // Define a route handler for the root URL ("/")
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
  });

  app.get('/rest', (req, res) => {
    res.json({ data: 'API working' });
  });

  const httpServer = http.createServer(app);

  httpServer.listen({ port: 3001 }, () => {
    console.log(`Server is running on http://localhost:3001`);
    console.log(`GraphQL path is ${server.graphqlPath}`);
  });
}

startServer();
