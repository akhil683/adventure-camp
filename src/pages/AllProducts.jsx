import React from 'react'
import ProductCard from '../components/products/ProductCard'
import Container from '../components/Container'

const AllProducts = () => {
  return (
    <Container>
      <div className='flex justify-between items-center p-12 pb-4'>
        <h2 className='text-5xl font-bebasNeue'>All Products</h2>
        <p className='text-2xl font-roboto'>Manali</p>
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
