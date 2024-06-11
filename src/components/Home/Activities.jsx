import React from 'react'
import Container from '../Container'
import activitiesImg from '../../assets/activities.jpg'
import Button from '../Button'
import { Link } from 'react-router-dom'
import FramerDown from '../Framer/FramerDown'
import FramerUp from '../Framer/FramerUp'

const Activities = () => {

  return (
   <Container>

      <div className='relative md:min-h-screen font-poppins flex justify-center md:items-center gap-6 flex-wrap-reverse'>

         <FramerUp>
         <div className='md:pt-48 text-lg max-w-[400px]'>
            <p><span className='text-4xl font-semibold text-red-500'>D</span> iscover the Great Outdoors fun activites like </p>
            <ul className='my-6 px-2 text-base'>
               <li>- Paragliding</li>
               <li>- Rafting</li>
               <li>- Skiing</li> 
               <li>- Quad Biking</li>
               <li>- Camping</li>
               <li>- Downhill Cycling</li>
            </ul>
            <Link to='/activities'>
               <Button color='red'>Explore Activities</Button>
            </Link>
         </div>
         </FramerUp>
         <h2 className='lg:absolute md:top-[20%] left-0 lg:text-7xl md:text-5xl text-4xl font-semibold text-green-600 max-w-[900px] z-20'>Nature's Playground: Adventure Activities</h2>
         <FramerDown>
         <div className=' md:h-[500px] h-[250px] md:w-[700px] w-[400px] relative'>
            <img src={activitiesImg} alt="Adventure Activities" className='absolute h-full w-full object-cover' />
         </div>
         </FramerDown>
      </div>
   </Container>
  )
}

export default Activities
