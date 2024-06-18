import { createSlice } from "@reduxjs/toolkit";
import service from "../utils/database";
import config from "../config/config";

const initialState = {
  wishlist: [],
};

const WishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    wishlistHandler: (state, action) => {
      const existingItem = state.wishlist.filter(
        (product) => product.id === action.payload.id
      );
      if (existingItem) {
        state.wishlist = state.wishlist.filter(
          (product) => product.id !== action.payload.id
        );
        service.deleteData(
          action.payload.id,
          config.appwriteProductCollectionId
        );
      } else {
        state.wishlist.push(action.payload);
        service.createData(
          action.payload.id,
          config.appwriteProductCollectionId
        );
      }
    },
  },
});

export const { addToWishlist, updateWishlist, deleteItemWishlist } =
  WishlistSlice.actions;
export default WishlistSlice.reducer;
