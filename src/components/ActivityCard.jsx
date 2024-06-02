import React from 'react'
import activityImg from "../assets/activities.jpg"
import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa";

const ActivityCard = () => {
  return (
    <Link className='sm:max-w-[300px] w-full p-4  rounded-lg hover:bg-gray-200 hover:shadow-2xl hover:shadow-gray-300 duration-200'>
      <div className='w-full sm:h-[220px] h-[250px] rounded-lg overflow-hidden'>
         <img src={activityImg} className='w-full h-full object-cover' alt="" />    
      </div>         
         <div className='flex justify-between'>
         <h3 className='text-3xl mt-2 font-semibold font-bebasNeue'>Paragliding</h3>
         <span className='flex items-center'>
            <FaStar className='text-green-600' /> (4.5)
         </span>
         </div>
         <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat</p>
         <p className='font-semibold font-bebasNeue text-2xl my-1'><strike className='text-lg text-gray-500 mr-2'>$12.99</strike>$9.99</p>
         <button className='flex justify-center items-center gap-2 text-lg font-roboto w-full py-2 rounded-lg bg-green-600 text-white'>
            Book Now
         </button>
    </Link>
  )
}

export default ActivityCard
