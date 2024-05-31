import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/logo.png"

import { MdAccountCircle } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
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
         <Link 
            to='/login' 
            className='max-md:hidden px-4 bg-black text-white py-1 rounded-full text-base  font-roboto hover:bg-red-600 duration-200'
         >
            Log In 
         </Link>

         {/* <Link>
            <p className='font-roboto bg-green-500 px-1 rounded-full flex items-center gap-1'><MdAccountCircle />Log In</p>
         </Link>  */}

      </div>
    </nav>
  )
}

export default Navbar
