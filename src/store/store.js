import { configureStore} from "@reduxjs/toolkit"
import authSlice from "./authSlice"
import ProductSlice from "./ProductSlice"

const store = configureStore({
   reducer: {
      auth: authSlice,
      Products: ProductSlice
   }    
})

export default store