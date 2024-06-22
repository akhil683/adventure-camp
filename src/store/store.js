import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import CartSlice from "./CartSlice";
import WishlistSlice from "./WishlistSlice";
import adventureSlice from "./adventureSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: CartSlice,
    wishlist: WishlistSlice,
    adventures: adventureSlice,
  },
});

export default store;
