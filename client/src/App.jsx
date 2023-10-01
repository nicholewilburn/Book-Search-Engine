import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ApolloPage from './components/ApolloPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/apollo" element={<ApolloPage />} /> {/* Add the route for ApolloPage */}
        <Route path="/" element={<Outlet />} />
      </Routes>
    </>
  );
}

export default App;