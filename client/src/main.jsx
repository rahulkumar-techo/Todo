import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";

import Root from './Root.jsx';
import HomePage from './pages/home/HomePage.jsx';




 const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>}>
    <Route path='' element={<HomePage/>} />
      
    </Route>
  )
);



createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
