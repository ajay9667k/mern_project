import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/Carts/CartSlice'

export const store = configureStore({
  reducer: {
    Cart: cartReducer,
  },
})