// RoutesConfig.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';

function RoutesConfig() {
  return (
    <Router>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Outlet />}>
            <Route path="/apollo" element={<ApolloPage />} />
            <Route path="/" element={<SearchBooks />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default RoutesConfig;
