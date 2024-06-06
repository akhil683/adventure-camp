import React from 'react'
import Header from '../components/Home/Header'
import Navbar from '../components/Navbar'
import Activities from '../components/Home/Activities'
import Vehicles from '../components/Home/Vehicles'
import Products from '../components/Home/Products'
import Contact from '../components/Home/Contact'

const Home = () => {
  return (
    <>
      <Header/> 
      <Activities />
      <Vehicles />
      <Products />
      <Contact />
    </>
  )
}

export default Home
