import { createSlice } from "@reduxjs/toolkit"
import { useSelector } from "react-redux";
import service from "../utils/database";
import config from "../config/config";


const initialState = {
  cartItems: [],
  cartTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getCartItems: (state, action) => {
      state.cartItems = action.payload.documents
    },
    addToCart: (state, action) => {
      state.cartTotal = state.cartTotal + action.payload.price;
      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (existingCartItem) {
        state.cartItems = state.cartItems.map((cartItem) =>
          cartItem.id === action.payload.id
            ? (
              { ...cartItem, quantity: cartItem.quantity + 1 }
              (service.updateData(cartItem.id, cartItem, config.appwriteCartCollectionId))
            )
            : cartItem
        );
        service.updateData()
      } else {
        state.cartItems = [
          ...state.cartItems,
          { ...action.payload, quantity: 1},
        ];
        const { name, price, ActualPrice, Brand, description, quantity=1, Rating, id, imageURL,rated, userID="123sdjfk" } = action.payload
        service.createData({name, price, ActualPrice, Brand, description, quantity, Rating, id, imageURL, rated,  userID}, config.appwriteCartCollectionId) 
        console.log(action.payload)
      }
      console.log(state.cartItems)
    },
    updateItem: (state) => {},
    deleteItem: (state, action) => {
      state.cartTotal =
        state.cartTotal - action.payload.price * action.payload.quantity;
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
    },
  },
});

export const { getCartItems, addToCart, updateItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer