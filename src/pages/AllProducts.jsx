import React from 'react'
import ProductCard from '../components/products/ProductCard'
import Container from '../components/Container'
import DropDownPlaces from '../components/DropDownPlaces'

const AllProducts = () => {
  const products = ['All Products','Manali, Himachal Pradesh', 'Shimla, Himachal Pradesh', 'Massorie, Utrakhand', 'Dharamshala, Himachal Pradesh']

  return (
    <Container>
      <div className='flex justify-between flex-wrap items-center p-12 max-md:px-4 pb-4'>
        <h2 className='md:text-5xl text-2xl font-bebasNeue'>All Products</h2>
        <DropDownPlaces products={products} />
      </div>
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
