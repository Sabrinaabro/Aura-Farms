import React from 'react';
import { Header, Info, Story, Products, Footer } from './components';
import Navbar from './components/Navbar/Navbar';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <><Navbar /><Header /></>,
  },
  {
    path: "/services",
    element: <><Navbar /><Story /></>,
  },
      {
        path: "/shop",
        element: <><Navbar /><Products /></>,
      },
    ])


const App = () => {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
};

export default App
