import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import authService from "./utils/auth";

import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser().then((userData) => {
      if (userData) {
        dispatch(login({ userData }));
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
