import React from 'react'
import ProductCard from '../components/products/ProductCard'
import Container from '../components/Container'
import toast, { Toaster } from 'react-hot-toast'
import image1 from "../assets/tents/1.jpg"
import image2 from "../assets/tents/2.jpg"
import image3 from "../assets/tents/3.jpg"
import image4 from "../assets/tents/4.jpg"
import image5 from "../assets/tents/5.jpg"
import image6 from "../assets/tents/6.jpg"

const AllProducts = () => {
  const handleCart = () => {
    toast.success("Added to the Cart !")
  }
  const Products = [
    {
      name: "Colemon Event Shelter Pro",
      image: image1,
      price: "17999",
      rating: 3.5,
      description: "lorem ipsum dolor sit amet, consectetur adip laksdf lakdfn ",
    },
    {
      name: "Coleman Skylodge 4 Person Instant Camping Tent",
      image: image2,
      price:"21999",
      rating: 3.5,
      description: "lorem ipsum dolor sit amet, consectetur adip laksdf lakdfn ",
    },
    {
      name: "Coleman Skydome Darkroom 4 Person Tent",
      image: image3,
      price: "6599",
      rating: 3.5,
      description: "lorem ipsum dolor sit amet, consectetur adip laksdf lakdfn ",
    },
    {
      name: "Coleman Darwin 2 Tent",
      image: image4,
      price: "7999",
      rating: 3.5,
      description: "lorem ipsum dolor sit amet, consectetur adip laksdf lakdfn ",
    },
    {
      name: "Coleman Cortes Octagon 8 Tent (Orange)",
      image: image5,
      price: "28999",
      rating: 3.5,
      description: "lorem ipsum dolor sit amet, consectetur adip laksdf lakdfn ",
    },
    {
      name: "Coleman Darwin 2 Plus Tent",
      image: image6,
      price: "9899",
      rating: 3.5,
      description: "lorem ipsum dolor sit amet, consectetur adip laksdf lakdfn ",
    },
  ]

  return (
    <Container>
        <h2 className='md:text-5xl text-2xl pt-12 px-20 max-md:px-4 font-bebasNeue'>All Products</h2>
        <Toaster position='top-center' />
      <div className='flex flex-wrap justify-center items-center gap-6'>
        {Products.map(product => (
          <ProductCard handleCart={handleCart} product={product} />       
        ))}
        {/* {Products ? (
          <ProductCard handleCart={handleCart} />       
        ) : (
          <p>Loading...</p>
        )} */}
      </div>
    </Container>
  )
}

export default AllProducts
