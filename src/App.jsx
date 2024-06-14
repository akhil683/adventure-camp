import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import authService from "./utils/auth"
import { login, logout } from "./store/authSlice"
import service from "./utils/database"
import config from "./config/config"
import { getCartItems } from "./store/CartSlice"
const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then(userData => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    service.getAllData(config.appwriteCartCollectionId)
    .then(cartItems => {
      if (cartItems) {
        dispatch(getCartItems(cartItems))
      } else {
        console.log("no cart items")
      }
    })
  }, [])

  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
