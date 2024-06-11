import { createSlice } from "@reduxjs/toolkit"

const initialState = {
   Products: []
}

const ProductSlice = createSlice({
   name: "Products",
   initialState,
   reducers: {
      setProducts: (state, action) => {
         state.Products = action.payload
      },
}})

export const { setProducts  } = ProductSlice.actions
export default ProductSlice.reducer