import React from 'react'
import Container from '../components/Container'
import Img from "../assets/vehicleImg.jpg"
import { MdLocationOn } from 'react-icons/md'
import { FaStar } from 'react-icons/fa'

const BookingDetail = () => {
  return (
      <div className='w-full min-h-screen bg-white py-12 font-roboto'>
         <div className='relative md:h-screen h-[50vh] flex justify-center items-center bg-black text-white'>
            <img src={Img} alt="" className='absolute w-full h-full object-cover opacity-60' />
            <h2 className='text-7xl max-md:hidden text-center font-bebasNeue z-20 text-green-600'>Royal Enfield Himalayan 450</h2>
         </div>
         <div className='pt-12 px-4 md:px-8'>
            <div className='flex max-md:flex-col gap-4'>
               <div className='p-4 w-full md:w-[60%] bg-gray-200 rounded-lg max-w-[700px]'>
                  <p className='text-4xl px-4 py-1 border-l-4 font-semibold border-green-600'>Royal Enfield Himalayan 450</p>
                  <div className='py-4 text-sm flex justify-around  items-center'>
                     <span className=' text-gray-800 flex gap-2 items-center'><MdLocationOn className='text-lg' /> Manali</span>
                     <span>245 ratings</span>
                     <span className='flex gap-2 items-center rounded-lg'>
                        <FaStar className='text-green-600' />
                        9.2/10
                     </span>
                  </div>
               </div>
               <div className=' bg-gray-200 p-3 rounded-lg max-md:w-full w-[35%]'>
                  <p className='text-gray-600 text-lg'>Starting from <strike className="font-bebasNeue">$15.99</strike></p>
                  <p className='my-2 text-orange-600'><span className='text-4xl font-bebasNeue '>$11.99</span> per person </p>
                  <button className='w-full bg-red-600 text-white text-xl hover:bg-green-600 duration-200 py-2 rounded-lg'>Book Now</button>
               </div>
            </div>
         </div>
      </div>
  )
}

export default BookingDetail
