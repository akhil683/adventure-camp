import React from 'react'
import { Link } from 'react-router-dom'

import heroImg from "../../assets/MainImg.jpg"
import Button from '../Button'

const Header = () => {
  return (
      <div className='h-screen'>
            <img src={heroImg} className='-z-10 w-full object-cover bottom-0 h-full absolute opacity-70' alt="Camping in Mountains" />
            <div className='h-full flex justify-center items-center flex-col gap-12'>
              <h1 className='text-center leading-tight text-white text-2xl lg:text-5xl font-roboto'>We seek Adventure <br />Explore nature with <span className=' font-semibold text-green-500'>Adventure Vault</span></h1>
              <div className='flex justify-center items-center gap-6'>
                <Link>
                  <Button>Explore</Button> 
                </Link>
                <Link>
                  <Button>Sign Up</Button> 
                </Link>
              </div>
            </div>
      </div>
  )
}

export default Header
