import React from 'react'

const Button = ({children, }) => {
  return (
    <button className='px-6 py-2 text-base lg:text-lg rounded-full bg-green-600 text-white hover:text-green-600 hover:bg-white duration-200 font-poppins'>
     {children} 
    </button>
  )
}

export default Button
