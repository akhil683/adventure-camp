import React from 'react'
import Container from "../components/Container"
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {

  return (
    <Container>
      <div className='flex max-md:flex-col gap-6 pt-12'>
        <div className='md:w-[70%] w-full'>
          <CartItem />          
          <CartItem />          
          <CartItem />          
        </div>
        <div className='md:w-[25%] rounded-lg w-full flex bg-gray-100 h-full justify-center p-4'>
          <div className='rounded-lg font-roboto'>
            <p className='text-center text-2xl mb-4'>Order Summary</p>
            <hr />
            <table>
              <tr>
                <td>Subtotal</td>
                <td>$200</td>
              </tr>
              <tr>
                <td>Discount(10%)</td>
                <td>-$20</td>
              </tr>
              <tr>
                <td>GST(15%)</td>
                <td>$30</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td>$4</td>
              </tr>
              <tr className='font-semibold'>
                <td>Total</td>
                <td>$214</td>
              </tr>
            </table>
            <p className='text-xs mt-2 text-red-600'>Free shipping above $200 purchase</p>
            <button className='mt-8 uppercase bg-black text-white hover:bg-green-600 px-4 py-3 rounded-lg duration-200 w-full'>
              Checkout 
            </button>
            <button className='hover:underline no-underline mt-4 text-center w-full'>
              Continue Shopping
            </button>
          </div>  
        </div>
      </div>
    </Container>
  )
}

export default Cart
