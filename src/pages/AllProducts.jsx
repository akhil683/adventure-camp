import React, { useEffect, useState } from 'react'
import ProductCard from '../components/products/ProductCard'
import Container from '../components/Container'
import toast, { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../store/ProductSlice'
import service from '../utils/database'
import config from '../config/config'
import SkeletonProduct from '../components/SkeletonProduct'
import { addToCart } from "../store/CartSlice"

const AllProducts = () => {
  const dispatch = useDispatch()
  const [ isLoading, setIsLoading ] = useState(false)
  const { Products } = useSelector(state => state.Products)

  const handleCart = (item) => {
    dispatch(addToCart(item))
    toast.success("Added to the Cart !")
  }

  useEffect(() => {
    const getProductItems = async () => {
      setIsLoading(true)
      const products = await service.getAllData(config.appwriteCollectionId)
      console.log(products?.documents);
      if (products) {
        dispatch(setProducts(products.documents))
      }
      setIsLoading(false)
    }
    getProductItems()
  }, [dispatch])

  return (
    <Container>
        <h2 className='md:text-5xl text-2xl pt-12 px-20 max-md:px-4 font-bebasNeue'>All Products</h2>
        <Toaster position='top-center' />
      <div className='flex flex-wrap justify-center items-center gap-6 mt-6'>
        {isLoading 
        ? <>
          <SkeletonProduct />
          <SkeletonProduct />
          <SkeletonProduct />
          <SkeletonProduct />
        </>
        : Products?.map(product => (
          <ProductCard 
            key={product?.id} 
            handleCart={handleCart} 
            product={product} 
          />       
        ))}
      </div>
    </Container>
  )
}

export default AllProducts
