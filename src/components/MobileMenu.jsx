import React from 'react'
import { Link } from 'react-router-dom'
import { GoHomeFill } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import { MdCardTravel, MdOutlineLogin } from "react-icons/md";
import { TbActivityHeartbeat, TbTruckDelivery } from "react-icons/tb";
import { RiMotorbikeFill } from "react-icons/ri";

import logo from "../assets/logo.png"
import Button from './Button';

const MobileMenu = ({ showMenu, toggleMenu }) => {
   const show = showMenu ? 'right-0' : '-right-[100%]'
   const bgShow = showMenu ? 'block' : 'hidden'

  return (
   <>
   <div className={`${bgShow} w-screen h-screen absolute top-0 left-0 z-40 bg-black bg-opacity-5`} onClick={toggleMenu}></div>
    <div className={`${show} py-16 px-4 absolute top-0 duration-500 h-screen font-bebasNeue bg-white md:hidden w-[70%] z-50`}>
      <button className='absolute top-6 left-6 text-3xl' onClick={toggleMenu}>
         <RxCross2 />
      </button>
      <div className='text-3xl text-center flex flex-col items-center justify-center gap-4'>
         <img src={logo} width={200} height={200} alt="Adventure Vault's Logo" />
         <p className='text-4xl text-green-600'>Adventure Vault</p>
      </div>

      <hr className='bg-gray-300 h-[2px] my-8' />

      <ul className=' pl-4 text-2xl flex flex-col gap-4'>
         <li>
         <Link className='flex py-2 gap-2 items-center'><GoHomeFill className='text-3xl' />Home</Link>
         </li>
         <li>
         <Link className='flex py-2 gap-2 items-center'><MdCardTravel className='text-3xl' />Products</Link>
         </li>
         <li>
         <Link className='flex py-2 gap-2 items-center'><TbActivityHeartbeat className='text-3xl' />Activities</Link>
         </li>
         <li>
         <Link className='flex py-2 gap-2 items-center'><RiMotorbikeFill className='text-3xl' />Vehicles</Link>
         </li>
         <li>
         <Link className='flex py-2 gap-2 items-center'><TbTruckDelivery className='text-3xl' />Orders</Link>
         </li>
      </ul>

      <hr className='bg-gray-300 h-[2px] my-8' />
      <button className='flex gap-3 justify-center items-center py-3 w-full font-roboto bg-black text-white text-2xl rounded-lg'>
         Log Out 
         <MdOutlineLogin />
      </button>
    </div>
   </>
  )
}

export default MobileMenu
