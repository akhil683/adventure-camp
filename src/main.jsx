import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";

import ProtectedLayout from "./components/Layout/ProtectLayout.jsx";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import AllProducts from "./pages/AllProducts.jsx";
import Product from "./pages/Product.jsx";
import Cart from "./pages/Cart.jsx";
import Activity from "./pages/Activity.jsx";
import RentVehicle from "./pages/RentVehicle.jsx";
import Orders from "./pages/Orders.jsx";
import BookingDetail from "./pages/BookingDetail.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <ProtectedLayout authentication={false}>
            <Login />
          </ProtectedLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <ProtectedLayout authentication={false}>
            <Signup />
          </ProtectedLayout>
        ),
      },
      {
        path: "/all-products",
        element: (
          <ProtectedLayout authentication={false}>
            <AllProducts />
          </ProtectedLayout>
        ),
      },
      {
        path: "/product/:id",
        element: (
          <ProtectedLayout authentication={false}>
            <Product />
          </ProtectedLayout>
        ),
      },
      {
        path: "/activities",
        element: (
          <ProtectedLayout authentication={false}>
            <Activity />
          </ProtectedLayout>
        ),
      },
      {
        path: "/booking/:id",
        element: (
          <ProtectedLayout authentication={false}>
            <BookingDetail />
          </ProtectedLayout>
        ),
      },
      {
        path: "/rent-vehicles",
        element: (
          <ProtectedLayout authentication={false}>
            <RentVehicle />
          </ProtectedLayout>
        ),
      },
      {
        path: "/booking",
        element: (
          <ProtectedLayout authentication={false}>
            <BookingDetail />
          </ProtectedLayout>
        ),
      },
      {
        path: "/orders",
        element: (
          <ProtectedLayout authentication={true}>
            <Orders />
          </ProtectedLayout>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <ProtectedLayout authentication={true}>
            <Wishlist />
          </ProtectedLayout>
        ),
      },
      {
        path: "/cart",
        element: (
          <ProtectedLayout authentication={false}>
            <Cart />
          </ProtectedLayout>
        ),
      },
      {
        path: "/checkout",
        element: (
          <ProtectedLayout authentication={true}>
            <Orders />
          </ProtectedLayout>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
