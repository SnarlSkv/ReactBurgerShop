import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchBurgers = createAsyncThunk('items/fetchBurgersStatus', async ({ sortBy, category, search, currentPage, }) => {
  const { data } = await axios.get(
    `https://6410a431ff89c2e2d4e4e0d2.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=desc${search}`
  )
  return data;
})

const initialState = {
  burgers: [],
  status: 'loading', // loading | success | error
}

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setItems(state, action) {
      state.burgers = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBurgers.pending, (state) => {
        state.status = 'loading';
        state.burgers = [];
      })
      .addCase(fetchBurgers.fulfilled, (state, action) => {
        state.burgers = action.payload;
        state.status = 'success';
      })
      .addCase(fetchBurgers.rejected, (state) => {
        state.status = 'error';
        state.burgers = [];
      });
  },
})

export const { setItems } = itemsSlice.actions;

export default itemsSlice.reducer;
