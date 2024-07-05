import { createSlice } from "@reduxjs/toolkit";
import service from "../utils/database";
import config from "../config/config";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
    addToCart: (state, action) => {
      console.log(action.payload);
      const existingCartItem = state.cartItems?.find(
        (cartItem) => cartItem.id === action.payload.id,
      );
      if (existingCartItem) {
        state.cartItems = state.cartItems.map((cartItem) =>
          cartItem.id === action.payload.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }(
                service.updateData(
                  cartItem.$id,
                  cartItem,
                  config.appwriteCartCollectionId,
                ),
              )
            : cartItem,
        );
      } else {
        state.cartItems = [
          ...state.cartItems,
          { ...action.payload, quantity: 1 },
        ];
        const {
          name,
          price,
          ActualPrice,
          Brand,
          description,
          quantity = 1,
          Rating,
          id,
          imageURL,
          rated,
          userID,
          priceID,
        } = action.payload;
        service.createData(
          {
            name,
            price,
            ActualPrice,
            Brand,
            description,
            quantity,
            Rating,
            id,
            imageURL,
            rated,
            userID,
            priceID,
          },
          config.appwriteCartCollectionId,
        );
      }
      console.log(state.cartItems);
    },
    deleteItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id,
      );
      console.log(state.cartItems);
      service.deleteData(action.payload.$id, config.appwriteCartCollectionId);
    },
  },
});

export const { getCartItems, addToCart, updateQuantity, deleteItem } =
  cartSlice.actions;
export default cartSlice.reducer;
