import React from 'react'
import productImg from '../../assets/MainImg.jpg'
import { FaShoppingCart } from 'react-icons/fa'

const ProductCard = () => {
  return (
    <div className='sm:max-w-[300px] w-full px-2 py-4  rounded-lg'>
      <div className='w-full sm:h-[220px] h-[250px]'>
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
    </div>
  )
}

export default ProductCard
