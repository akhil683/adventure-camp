import React from 'react'
import Container from '../Container'
import vehicleImg from "../../assets/vehicleImg.jpg"
import { Link } from 'react-router-dom'
import Button from '../Button'

const Vehicles = () => {
  return (
    <Container>
      <div className='relative md:min-h-screen font-poppins flex justify-center md:items-center gap-6 flex-wrap'>


         <div className=' md:h-[500px] h-[250px] md:w-[650px] w-[400px] relative bg-black'>
            <img src={vehicleImg} alt="Adventure Activities" className='absolute h-full w-full object-cover opacity-80' />
         </div>

         <h2 className='lg:absolute md:left-[30%] md:top-[18%] lg:text-7xl md:text-5xl text-4xl font-semibold text-green-600 max-w-[900px] z-20'>Nature's Playground: Enjoy with Bikes!</h2>

         <div className='md:pt-48 text-lg max-w-[400px]'>
            <p><span className='text-4xl font-semibold text-red-500'>D</span> iscover the way of Enjoying your life by renting bikes</p>
            <p className='px-2 my-4 text-base'>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates sapiente reiciendis laboriosam dolorum, quidem repellat dolorem dignissimos laborum commodi qui voluptas reprehenderit illo odit quos quod, corrupti saepe praesentium animi at voluptatem! At debitis, quibusdam non reiciendis.  
            </p>
            <Link to='/rent-vehicles'>
               <Button color="red">Explore Bikes</Button> 
            </Link>
         </div>

      </div>
    </Container>
  )
}

export default Vehicles
