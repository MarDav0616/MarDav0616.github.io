import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page from './Page.jsx';
import Homepage from './Homepage.jsx';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
      children: [
        {
          path: "/page",
          element: <Page />
        },
      ],
    },
  ]);
  return (
    <RouterProvider router={router} />
  );
};
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
