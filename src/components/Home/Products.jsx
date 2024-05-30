import React from 'react'
import Container from '../Container'
import ProductImg from "../../assets/MainImg.jpg"

const Products = () => {
  return (
    <Container>
      <div className='min-h-screen font-roboto flex justify-center items-center flex-wrap-reverse'>
         <div className=''>
            <h2 class='md:text-5xl text-4xl font-semibold text-green-600 max-w-[500px]'>Nature's Playground: Camping Vault</h2>
            <p className='text-lg mt-2'>Discover the world of camping in mountains with</p>
            <ul className='px-2 mt-4'>
               <li>Camping gear</li>
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
