import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from "./slices/Auth/authSlice";
import { productsSlice } from "./slices/Products/productsSlice";
import { cartSlice } from "./slices/Cart/cartSlice";

export const store = configureStore({
    reducer: {
      auth: authSlice.reducer,
      products: productsSlice.reducer,
      cart: cartSlice.reducer,
    },
  })
