import React from 'react'
import ProductCard from '../components/products/ProductCard'
import Container from '../components/Container'
import DropDownPlaces from '../components/DropDownPlaces'

const AllProducts = () => {
  const products = ['All Products','Manali, Himachal Pradesh', 'Shimla, Himachal Pradesh', 'Massorie, Utrakhand', 'Dharamshala, Himachal Pradesh']

  return (
    <Container>
        <h2 className='md:text-5xl text-2xl pt-12 px-20 max-md:px-4 font-bebasNeue'>All Products</h2>
      <div className='flex flex-wrap justify-center items-center gap-6'>
        <ProductCard />       
        <ProductCard />       
        <ProductCard />       
        <ProductCard />       
        <ProductCard />       
        <ProductCard />       
      </div>
    </Container>
  )
}

export default AllProducts
