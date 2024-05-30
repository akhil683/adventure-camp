import React from 'react'

const Container = ({ children }) => {

  return (
   <section className='min-h-screen relative bg-white md:px-16 px-4 py-8'>
      {children}    
   </section>
  )
}

export default Container
