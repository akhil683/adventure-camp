import React from 'react'

const Input = ({ placeholder, value, type, onChange}) => {
  return (
  <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className='bg-white rounded-lg py-2 placeholder:text-gray-600 px-2 w-full outline-none border-2 border-transparent focus:border-green-600'
  />
  )
}

export default Input
