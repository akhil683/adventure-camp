import React from 'react'
import Img from "../assets/campingImg.jpg"
import ReactStars from "react-rating-stars-component"
import { MdDelete } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

const CartItem = () => {
  const quantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
          <div className='w-full flex md:p-2  md:mb-4 mb-6 rounded-lg hover:bg-gray-100 duration-200'>
            <div className='md:w-[30%] w-[100px] h-[100px] md:h-[150px] rounded-lg overflow-hidden'>
              <img src={Img} alt="" className='w-full h-full object-cover' />
            </div>
            <div className="w-[70%] px-2">
              <div className='flex justify-between'>
                <h3 className='md:text-2xl text-lg font-bebasNeue'>Camping Tent [ 8 Person ] </h3>
                <div className='text-sm'>
                  <label className='max-md:hidden'>Quantitiy: </label>
                  <select className='border-2 w-[50px] border-gray-400 rounded-md outline-none'>
                  {quantity.map(quantity => (
                    <option key={quantity} value={quantity}>{quantity}</option>
                  )) }
                  </select>
                </div>
              </div>
              <p className='text-xs'>Brand: Adventure Vault</p>
              <span className='flex items-center gap-2 md:text-sm text-xs mt-2'>
                <ReactStars
                  count={5}
                  value={4}
                  edit={false}
                  isHalf={true}
                  size={16}
                  activeColor="#16a34a"
                /> (4)
              </span>
              <div className='flex justify-between items-end'>
              <div className='flex md:gap-6 gap-4 md:mt-6 mt-2 md:text-sm text-xs text-gray-600'>
                <button className='flex gap-2 items-center hover:text-gray-700 px-2 py-1 hover:bg-gray-200 rounded-md duration-200'>
                  <MdDelete /> Remove  
                </button>
                <button className='flex md:gap-2 gap-1 items-center hover:text-gray-700 px-2 py-1 hover:bg-gray-200 rounded-md duration-200'>
                  <FaHeart /> Wishlist  
                </button>
              </div>
              <p className='md:text-3xl text-lg font-bebasNeue text-red-600'><strike className="mr-2 md:text-base text-sm text-gray-600">&#8377;699</strike>&#8377;599</p>
              </div>
            </div>
          </div>
  )
}

export default CartItem
