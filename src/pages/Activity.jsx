import React from 'react'
import DropDownPlaces from '../components/DropDownPlaces'
import Container from '../components/Container'
import ActivityCard from '../components/ActivityCard'

const Activity = () => {
  const products = ['All Products','Manali, Himachal Pradesh', 'Shimla, Himachal Pradesh', 'Massorie, Utrakhand', 'Dharamshala, Himachal Pradesh']

  return (
    <Container>
      <div className='flex justify-between flex-wrap items-center py-12 px-20 max-md:px-4 pb-4'>
        <h2 className='md:text-5xl text-2xl font-bebasNeue'>Packages</h2>
        <DropDownPlaces products={products} />
      </div>
      <div className='flex flex-wrap items-center justify-center gap-6'>
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
      </div>
    </Container>
  )
}

export default Activity
