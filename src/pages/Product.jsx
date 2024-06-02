import React from 'react'
import campingImg from "../assets/campingImg.jpg"
import { Link } from 'react-router-dom'
import { MdKeyboardBackspace } from "react-icons/md"
import ReactStars from "react-rating-stars-component"
import { FaShoppingCart } from 'react-icons/fa'

const Product = () => {
  const quantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <div className='bg-white text-black min-h-screen p-16 max-sm:px-6'>

      <Link to={-1}>
        <button className='duration-200 hover:bg-black hover:text-white rounded-full px-2 py-1 text-3xl'>
          <MdKeyboardBackspace />
        </button>
        </Link>

      <div className='md:px-16 mt-4 flex max-md:flex-col justify-center items-center gap-12'>

        <div className='md:w-[50%] w-full lg:h-[450px] md:h-[400px] rounded-lg overflow-hidden'>
          <img src={campingImg} alt="" className='w-full h-full object-cover' />   
        </div>   

        <div className='lg:w-[50%] lg:h-[450px] md:h-[400px] h-full'>
          <h2 className='text-4xl font-bebasNeue'>Camping Tent (8 persons)</h2>
          <p className='font-roboto text-sm mt-2'><span className='font-semibold'>Brand: </span>Adventure Vault</p>
          <div className='flex items-center font-roboto text-gray-500 justify-between text-sm py-2'>
              <span className='flex items-center justify-center gap-2'>
                4.5 
            <ReactStars
              count={5}
              value={4}
              edit={false}
              isHalf={true}
              // onChange={ratingChanged}
              size={24}
              activeColor="#16a34a"
            />
            </span>
            <p>14 ratings</p>
          </div> 
          <hr className='my-2 h-[2px] bg-gray-300' />    
          <p className='text-sm font-roboto text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum consequuntur minus qui voluptatibus saepe cupiditate amet obcaecati quos Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus voluptate dolore quibusdam.totam est, porro magni deserunt, quis commodi, esse eaque sed. Quo, cupiditate.</p>

          <p className='text-4xl font-bebasNeue mt-4'>
            <strike className="text-xl text-gray-500 mr-2">
              $249.99
            </strike>
            $199.99
          </p>
          <div className='py-4'>
            <label className='font-semibold'>Quantitiy: </label>
            <select className='border-2 border-gray-400 rounded-md'>
              {quantity.map(quantity => (
                <option key={quantity} value={quantity}>{quantity}</option>
              )) }
            </select>
          </div>

         <button className='flex justify-center items-center gap-2 text-xl font-roboto w-full py-2 my-4 rounded-lg hover:bg-green-600 bg-black duration-200 text-white'>
            <FaShoppingCart /> Add to Cart
         </button>
         <p className='text-sm font-roboto'>Free delivery on orderes above $50</p>
        </div>

      </div>  
    </div>
  )
}

export default Product
