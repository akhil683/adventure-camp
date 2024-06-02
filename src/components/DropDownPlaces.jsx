import React from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const DropDownPlaces = ({ products }) => {
const options = products
const defaultOption = options[0];
  return (
   <Dropdown 
      options={options} 
      value={defaultOption} 
      placeholder="Select an option" 
      className='md:w-[300px] w-[200px]'
      controlClassName=''
   />
  )
}

export default DropDownPlaces