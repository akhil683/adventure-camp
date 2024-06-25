import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { MdAccountCircle, MdOutlineLogin } from 'react-icons/md'

import { logout } from '../store/authSlice'
import authService from '../utils/auth'

const LogOutBtn = ({ toggleMenu=null }) => {

   const { status, userData } = useSelector(state => state.auth)
   const dispatch = useDispatch()

   const handleLogOut = () => {
      authService.logout().then(() => {
         dispatch(logout())
      })
      toggleMenu
   }

  return (
   <div>
      {status ? (
         <button
            onClick={handleLogOut}
            className='px-4 bg-black max-md:w-full text-white py-2 rounded-full text-base  font-roboto hover:bg-red-600 duration-200 flex justify-center items-center gap-2'
         >
            <MdAccountCircle className='text-xl' />
            <p>{userData.name}</p>
         </button>
      ) : (
         <Link 
            to='/login' 
            className='flex items-center gap-2 px-4 bg-black text-white py-2 justify-center rounded-lg text-base  font-roboto hover:bg-red-600 duration-200'
         >
            Log In 
            <MdOutlineLogin />
         </Link>
      )}
   </div>
  )
}

export default LogOutBtn
