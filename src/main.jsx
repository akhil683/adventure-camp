import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Provider } from 'react-redux'
import store from './store/store.js'

import ProtectedLayout from './components/ProtectLayout.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import AllProducts from './pages/AllProducts.jsx'
import Product from './pages/Product.jsx'
import Cart from './pages/Cart.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: (
          <ProtectedLayout authentication={false}>
            <Login />
          </ProtectedLayout>
        )
      },
      {
        path: "/signup",
        element: (
          <ProtectedLayout authentication={false}>
            <Signup />
          </ProtectedLayout>
        )
      },
      {
        path: "/all-products",
        element: (
          <ProtectedLayout authentication={false}>
            <AllProducts />
          </ProtectedLayout>
        )
      },
      {
        path: "/product/:slug",
        element: (
          <ProtectedLayout authentication={false}>
            <Product />
          </ProtectedLayout>
        )
      },
      {
        path: "/cart",
        element: (
          <ProtectedLayout authentication={true}>
            <Cart />
          </ProtectedLayout>
        )
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)