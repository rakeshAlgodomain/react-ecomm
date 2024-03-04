import React from 'react';
import './App.css';

import Home from './pages/Home';
import LoginPage from './pages/LoginPage';

import SignupPage from './pages/SignupPage';
import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetail from './features/product-list/components/ProductDetail';
import { ProductDetailPage } from './pages/ProductDetailPage';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (<Home></Home>),
    },
    {
      path: "/login",
      element: (<LoginPage></LoginPage>),
    },
    {
      path: "/signup",
      element: (<SignupPage></SignupPage>),
    },
    {
      path: "/cart",
      element: (<CartPage></CartPage>),
    },
    {
      path: "/checkout",
      element: (<Checkout></Checkout>),
    },
    {
      path: "/product-detail",
      element: (<ProductDetailPage></ProductDetailPage>),
    },


  ]);

  return (
    <>
      <div className="App">
      <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
