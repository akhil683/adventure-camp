import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/logo.png"

import authService from "../utils/auth";
import { MdAccountCircle } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import MobileMenu from './MobileMenu';
import { useSelector } from 'react-redux';

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout } from "../store/authSlice.js";
const Navbar = () => {
   const { status } = useSelector(state => state.auth)
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const [ showMenu, setShowMenu ] = useState(false)
   const toggleMenu = () => {
      setShowMenu(!showMenu)
   }
   const handleLogOut = () => {
      authService.logout()
      dispatch(logout())
   }

  return (
    <nav className='w-full font-bebasNeue px-6 py-4 md:py-3    bg-white flex  items-center justify-between lg:justify-center lg:gap-20 gap-6 fixed z-50'>

      <Link className='gap-2 flex'>
         <img src={Logo} alt="logo" width={40} className='-translate-y-1' />
         <h2 className='uppercase text-2xl font-semibold'>adventure vault</h2> 
      </Link>

      <ul className=' max-lg:hidden text-lg flex justify-center items-center lg:gap-6 gap-4'>
         <li>
            <Link to='/'>Home</Link>
         </li>
         <li>
            <Link to='all-products'>Products</Link>
         </li>
         <li>
            <Link to='/activities'>Activities</Link>
         </li>
         <li>
            <Link to='/rent-vehicles'>Vehicles</Link>
         </li>
         <li>
            <Link to='/orders'>Orders</Link>
         </li>
      </ul>

      <div className='text-lg flex justify-center items-center gap-6'>
         <Link 
            to='/cart' 
            className='text-2xl hover:text-green-600 duration-200'
         >
            <FaShoppingCart />
         </Link>
         {status ? (
            <button
               onClick={handleLogOut}
               className='max-md:hidden px-2 bg-black text-white py-1 rounded-full text-base  font-roboto hover:bg-red-600 duration-200 flex justify-center items-center gap-1'
            >
               <MdAccountCircle className='text-xl' />
               <p>Akhil</p>
               </button>
         ) : (
         <Link 
            to='/login' 
            className='max-md:hidden px-4 bg-black text-white py-1 rounded-full text-base  font-roboto hover:bg-red-600 duration-200'
         >
            Log In 
         </Link>
         )}

         <button className='text-3xl md:hidden' onClick={toggleMenu}>
            <CgMenuRight />            
         </button>
      <MobileMenu showMenu={showMenu} toggleMenu={toggleMenu} />
      </div>
    </nav>
  )
}

export default Navbar
