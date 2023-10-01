// src/graphql/queries.js

import { gql } from '@apollo/client';

// Define your GraphQL queries using the gql template literal
export const GET_BOOKS = gql`
  query GetBooks {
    books {
      title
      author
      description
      // Add other fields you want to retrieve from your GraphQL API
    }
  }
`;

// You can define more queries here if needed
