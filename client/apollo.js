// apolloClient.js

import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

// Create an HTTP link to your GraphQL server
const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql', // Replace with your GraphQL server's URI
});

// Create an Apollo Client instance with a cache and the HTTP link
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
