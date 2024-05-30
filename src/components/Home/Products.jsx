import React from 'react'
import Container from '../Container'
import ProductImg from "../../assets/MainImg.jpg"

const Products = () => {
  return (
    <Container>
      <div className='min-h-screen font-roboto flex justify-center items-center flex-wrap-reverse'>
         <div className=''>
            <h2 class='md:text-5xl text-4xl font-semibold text-green-600 max-w-[500px]'>Nature's Playground: Adventure Activities</h2>
            <p className='text-lg mt-2'>Discover the Great Outdoors fun activites like </p>
            <ul className='px-2 mt-4'>
               <li>Paragliding</li>
               <li>Rafting</li>
               <li>Skiing</li> 
               <li>Quad Biking</li>
               <li>Camping</li>
               <li>Downhill Cycling</li>
            </ul>
         </div>
         <div className='md:h-[450px] h-[250px] md:w-[650px] w-[400px] relative'>
            <img src={ProductImg} alt="Adventure Activities" className='absolute h-full w-full object-cover' />
         </div>
      </div>
    </Container>
  )
}

export default Products
