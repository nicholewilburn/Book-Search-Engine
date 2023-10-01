import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import ApolloPage from './pages/ApolloPage';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route

// Import the Apollo Client configuration from the shared location
import client from '../apollo.js'; // Adjust the path as needed

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1 className='display-2'>Wrong page!</h1>,
    children: [
      {
        index: true,
        element: <SearchBooks />
      },
      {
        path: '/apollo',
        element: <ApolloPage /> // This is the route for /apollo
      },
      {
        path: '/saved',
        element: <SavedBooks />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <Routes> {/* Use Routes component */}
      <Route path="/" element={<App />}>
        <Route path="/apollo" element={<ApolloPage />} /> {/* This is the nested route for /apollo */}
        <Route path="/saved" element={<SavedBooks />} />
      </Route>
    </Routes>
  </RouterProvider>
);
