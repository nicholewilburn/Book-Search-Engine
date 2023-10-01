import './App.css';
import { ApolloProvider } from '@apollo/client'; // Import ApolloProvider
import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';
import client from '../apollo'; // Import your Apollo Client instance

function App() {
  return (
    <ApolloProvider client={client}>
      {/* Wrap your entire application with ApolloProvider */}
      <>
        <Navbar />
        <Outlet />
      </>
    </ApolloProvider>
  );
}

export default App;




