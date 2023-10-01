import ReactDOM from 'react-dom/client';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import RoutesConfig from './RoutesConfig'; // Import the RoutesConfig component

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={RoutesConfig} /> // Use RoutesConfig as the router
);


