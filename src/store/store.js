import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import CartSlice from "./CartSlice";
import WishlistSlice from "./WishlistSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: CartSlice,
    wishlist: WishlistSlice,
  },
});

export default store;
