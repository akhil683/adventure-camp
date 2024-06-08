import React from 'react'
import { IoCall } from "react-icons/io5";

const Contact = () => {
  return (
    <div className='flex p-20 max-md:px-4 bg-gray-300 max-md:flex-col font-roboto justify-around gap-12'>
      <div className='flex justify-center items-center flex-col md:w-[50%]'>
         <h4 className='text-red-600 text-3xl font-semibold mb-6 text-center'>Enjoy the dream Adventure of you life !</h4>    
         <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, magnam dignissimos nesciunt minima autem aspernatur blanditiis neque praesentium nulla ipsa. Aliquam asperiores adipisci ut sed inventore quae. Veritatis eos saepe voluptas, atque blan</p>
      </div>  
      <div className='flex justify-center items-center'>
         <button className='text-white bg-red-600 hover:bg-green-600 duration-200 rounded-lg md:px-12 px-8 md:text-3xl text-xl md:py-6 py-3 flex gap-4'>
            <IoCall />
            Contact Now
         </button>
      </div>
    </div>
  )
}

export default Contact
