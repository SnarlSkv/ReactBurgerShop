import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './slices/filterSlice'
import cartSlice from './slices/cartSlice'
import itemsSlice from './slices/itemsSlice'

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    cart: cartSlice,
    items: itemsSlice,
  },
})
