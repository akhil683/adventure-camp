import React from 'react'
import productImg from '../../assets/MainImg.jpg'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ProductCard = () => {
  return (
    <Link to='/product'  className='sm:max-w-[300px] w-full p-4  rounded-lg hover:bg-gray-200 hover:shadow-2xl hover:shadow-gray-300 duration-200'>
      <div className='w-full sm:h-[220px] h-[250px] rounded-lg overflow-hidden'>
         <img src={productImg} className='w-full h-full object-cover' alt="" />    
      </div>         
      <div className='px-2 pt-2'>
         <h3 className='text-3xl font-semibold font-bebasNeue'>camping</h3>
         <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat</p>
         <p className='font-semibold font-bebasNeue text-2xl my-1'>$9.99</p>
         <button className='flex justify-center items-center gap-2 text-xl font-roboto w-full py-2 rounded-lg bg-green-600 text-white'>
            <FaShoppingCart /> Add to Cart
         </button>
      </div>
    </Link>
  )
}

export default ProductCard
