import React from 'react'

const Button = ({ children, color }) => {
  const bgColor = color==="red" ? "bg-red-600" : "bg-green-600"

  return (
    <button className={`px-6 py-2 text-base lg:text-lg rounded-full text-white ${bgColor} hover:bg-black duration-200 font-poppins`}>
     {children} 
    </button>
  )
}

export default Button
