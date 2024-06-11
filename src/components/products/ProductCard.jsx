import React from 'react'
import productImg from '../../assets/MainImg.jpg'
import { FaShoppingCart, FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ProductCard = ({ handleCart, product }) => {
   const { name, image, price, rating, id, description } = product;

  return (
    <div className='sm:max-w-[280px] w-full flex flex-col justify-between p-4 max-sm:px-8  rounded-lg hover:bg-gray-200 hover:shadow-2xl hover:shadow-gray-400 duration-200 font-roboto md:h-[420px]'>
      <Link to={`/product/${id}`} className='h-full'>
      <div className='w-full h-[180px] rounded-lg overflow-hidden'>
         <img src={image} className='w-full h-full object-cover' alt="" />    
      </div>         
      <div className='flex flex-col justify-between md:h-[150px]'>
         <div className='flex justify-between gap-2'>
         <h3 className='font-semibold mt-2 max-md:text-lg'>{name}</h3>
         <span className='flex items-center'>
            <FaStar className='text-green-600' /> {rating}
         </span>
         </div>
         <p className='md:text-xs text-sm text-gray-500'>{description}</p>
         <p className='font-bebasNeue text-2xl my-1'><strike className='text-lg text-gray-600 mr-2'>${price}</strike>${price}</p>
      </div>
      </Link>
      <button onClick={handleCart} className='flex justify-center items-center gap-2 uppercase font-roboto w-full py-2 rounded-lg bg-green-600 hover:bg-red-600 duration-200 text-white'>
         <FaShoppingCart /> Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
