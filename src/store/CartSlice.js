import { createSlice } from "@reduxjs/toolkit"

const initialState = {
   cartItems: [],
   cartTotal: 0,
}

const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {

      addToCart: (state, action) => {
         const existingCartItem = state.cartItems.find(
            (cartItem) => cartItem.id === action.payload.id
         );
         if(existingCartItem) {
           state.cartItems = state.cartItems.map((cartItem) => 
            cartItem.id === action.payload.id 
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
            )
        } else {
         state.cartItems = [...state.cartItems, {...action.payload, quantity: 1}]
        }
        console.log(state.cartItems)
      },
      updateItem: (state) => {

      },
      deleteItem: (state, action) => {
         state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== action.id)
      }
}})

export const { addToCart, updateItem, deleteItem } = cartSlice.actions
export default cartSlice.reducer