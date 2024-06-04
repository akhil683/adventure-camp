import React from 'react'
import ProductCard from '../components/products/ProductCard'
import Container from '../components/Container'
import DropDownPlaces from '../components/DropDownPlaces'
import toast, { Toaster } from 'react-hot-toast'

const AllProducts = () => {
  const products = ['All Products','Manali, Himachal Pradesh', 'Shimla, Himachal Pradesh', 'Massorie, Utrakhand', 'Dharamshala, Himachal Pradesh']
  const handleCart = () => {
    toast.success("Added to the Cart !")
  }
  return (
    <Container>
        <h2 className='md:text-5xl text-2xl pt-12 px-20 max-md:px-4 font-bebasNeue'>All Products</h2>
        <Toaster position='top-center' />
      <div className='flex flex-wrap justify-center items-center gap-6'>
        <ProductCard handleCart={handleCart} />       
        <ProductCard handleCart={handleCart} />       
        <ProductCard handleCart={handleCart} />       
        <ProductCard handleCart={handleCart} />       
        <ProductCard handleCart={handleCart} />       
        <ProductCard handleCart={handleCart} />       
        <ProductCard handleCart={handleCart} />       
      </div>
    </Container>
  )
}

export default AllProducts
