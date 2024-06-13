import { configureStore} from "@reduxjs/toolkit"
import authSlice from "./authSlice"
import ProductSlice from "./ProductSlice"
import CartSlice from "./CartSlice"

const store = configureStore({
   reducer: {
      auth: authSlice,
      Products: ProductSlice,
      cart: CartSlice,
   }    
})

export default store