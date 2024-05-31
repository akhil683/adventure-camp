import React from 'react'
import Container from '../Container'
import activitiesImg from '../../assets/activities.jpg'
import Button from '../Button'
import { Link } from 'react-router-dom'

const Activities = () => {

  return (
   <Container>
      <div className='relative md:min-h-screen font-poppins flex justify-center md:items-center gap-[110px] flex-wrap-reverse'>

         <h2 className='absolute md:top-[20%] top-[270px] left-0 md:text-7xl text-4xl font-semibold text-green-600 max-w-[900px] z-20'>Nature's Playground: Adventure Activities</h2>

         <div className='md:pt-48 text-lg max-w-[400px]'>
            <p className='mb-2'><span className='text-4xl font-semibold text-red-500'>D</span>iscover the Great Outdoors fun activites like </p>
            <ul className='mb-4'>
               <li>Paragliding</li>
               <li>Rafting</li>
               <li>Skiing</li> 
               <li>Quad Biking</li>
               <li>Camping</li>
               <li>Downhill Cycling</li>
            </ul>
            <Link>
               <Button color='red'>Explore Activities</Button>
            </Link>
         </div>

         <div className=' md:h-[500px] h-[250px] md:w-[700px] w-[400px] relative'>
            <img src={activitiesImg} alt="Adventure Activities" className='absolute h-full w-full object-cover' />
         </div>

      </div>
   </Container>
  )
}

export default Activities
