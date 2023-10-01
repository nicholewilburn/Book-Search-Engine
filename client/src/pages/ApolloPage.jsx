// src/components/ApolloPage.jsx

import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_BOOKS } from '../graphql/queries'; // Import your GraphQL query

const ApolloPage = () => {
  // Use the GET_BOOKS query with useQuery hook
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Render your Apollo-related content here
  return (
    <div>
      <h1>Apollo Page</h1>
      {/* Display data fetched from the GET_BOOKS query */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ApolloPage;



