import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import {  createBrowserRouter,  RouterProvider, } from "react-router-dom";
import Organization from './views/Organization/Organization.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Organization />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
