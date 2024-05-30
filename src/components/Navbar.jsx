import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/logo.png"

import { MdAccountCircle } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import Button from './Button';

const Navbar = () => {
  return (
    <nav className='w-full font-bebasNeue px-6 py-3    bg-white flex  items-center justify-between lg:justify-center lg:gap-20 gap-6 fixed z-50'>

      <Link className='flex items-center gap-2'>
         <img src={Logo} alt="logo" width={40} className='-translate-y-1' />
         <h2 className='uppercase text-2xl font-semibold'>adventure vault</h2> 
      </Link>

      <ul className=' max-lg:hidden text-lg flex justify-center items-center lg:gap-6 gap-4'>
         <li>
            <Link>Home</Link>
         </li>
         <li>
            <Link>Products</Link>
         </li>
         <li>
            <Link>Activities</Link>
         </li>
         <li>
            <Link>Vehicles</Link>
         </li>
         <li>
            <Link>Orders</Link>
         </li>
      </ul>

      <div className='text-lg flex justify-center items-center gap-6'>
         <Link className='text-2xl hover:text-green-600 duration-200'><FaShoppingCart /></Link>
         <Link className='max-md:hidden px-4 bg-black text-white py-1 rounded-full font-roboto hover:bg-green-600 duration-200'>
            Sign Up 
         </Link>
         {/* <Link>
            <p className='font-roboto bg-green-500 px-1 rounded-full flex items-center gap-1'><MdAccountCircle />Log In</p>
         </Link>  */}

      </div>
    </nav>
  )
}

export default Navbar
