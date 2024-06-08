import React from 'react'

const Button = ({ children, color }) => {
  // const bgColor = color==="red" ? "bg-red-600" : "bg-green-600"
  // const bgHoverColor = color==="red" ? "hover:bg-green-600" : "hover:bg-red-600"  

  return (
    <button className="px-8 py-2 text-base lg:text-lg rounded-full text-white hover:bg-black duration-200 font-poppins bg-red-600">
     {children} 
    </button>
  )
}

export default Button
