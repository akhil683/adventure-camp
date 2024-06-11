import React, { useEffect } from 'react'
import ProductCard from '../components/products/ProductCard'
import Container from '../components/Container'
import toast, { Toaster } from 'react-hot-toast'
import image1 from "../assets/tents/1.jpg"
import image2 from "../assets/tents/2.jpg"
import image3 from "../assets/tents/3.jpg"
import image4 from "../assets/tents/4.jpg"
import image5 from "../assets/tents/5.jpg"
import image6 from "../assets/tents/6.jpg"
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../store/ProductSlice'
import service from '../utils/database'
import config from '../config/config'

const AllProducts = () => {
  const handleCart = () => {
    toast.success("Added to the Cart !")
  }
  const dispatch = useDispatch();

  useEffect(() => {
    const getProductItems = async () => {
      const products = await service.getAllData(config.appwriteCollectionId)
      console.log(products?.documents);
      if (products) {
        dispatch(setProducts(products.documents))
      }
    }
    getProductItems()
  }, [dispatch])

  const { Products } = useSelector(state => state.Products)

  return (
    <Container>
        <h2 className='md:text-5xl text-2xl pt-12 px-20 max-md:px-4 font-bebasNeue'>All Products</h2>
        <Toaster position='top-center' />
      <div className='flex flex-wrap justify-center items-center gap-6'>
        {Products?.map(product => (
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
