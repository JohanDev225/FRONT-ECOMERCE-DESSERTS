import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from "./slices/Auth/authSlice";

export const store = configureStore({
    reducer: {
      auth: authSlice.reducer,
    },
  })
