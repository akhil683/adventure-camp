import React from 'react'

const SkeletonProduct = () => {
  return (
    <div className='sm:w-[280px] w-full flex flex-col gap-2'>
      <div className='w-full h-[300px] bg-gray-400 animate-pulse rounded-2xl'></div> 
      <div className='w-[70%] h-[50px] bg-gray-400 animate-pulse rounded-full'></div> 
      <div className='w-full h-[50px] bg-gray-400 animate-pulse rounded-full'></div> 
    </div>
  )
}

export default SkeletonProduct
