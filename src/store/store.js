import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from "./slices/Auth/authSlice";
import { productsSlice } from "./slices/Products/productsSlice";
import { cartSlice } from "./slices/Cart/cartSlice";
import { adminSlice } from "./slices/Admin/adminSlice";

export const store = configureStore({
    reducer: {
      auth: authSlice.reducer,
      products: productsSlice.reducer,
      cart: cartSlice.reducer,
      admin: adminSlice.reducer,
    },
  })
