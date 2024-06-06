import React from 'react'
import Container from "../components/Container"
import CartItem from '../components/CartItem';

const Cart = () => {

  return (
    <Container>
      <div className='flex pt-12'>
        <div className='md:w-[60%] w-full'>
          <CartItem />          
          <CartItem />          
          <CartItem />          
        </div>

      </div>
    </Container>
  )
}

export default Cart
