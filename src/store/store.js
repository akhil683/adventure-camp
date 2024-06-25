import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import CartSlice from "./CartSlice";
import WishlistSlice from "./WishlistSlice";
import ProductSlice from "./ProductSlice";
import adventureSlice from "./adventureSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: CartSlice,
    wishlist: WishlistSlice,
    Products: ProductSlice,
    adventures: adventureSlice,
  },
});

export default store;
