import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cartSlice'; // Import your cart slice

export const store = configureStore({
  reducer: {
    cart: cartReducer, // Add your reducers here
  },
});
