//Redux
import { createSlice } from '@reduxjs/toolkit';

export const productListSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
  },
  reducers: {
    request: (state, action) => {
      return { loading: true, products: [] };
    },
    success: (state, action) => {
      return { loading: false, products: action.payload };
    },
    fail: (state, action) => {
      return { loading: false, error: action.payload };
    },
  },
});

export const { request, success, fail } = productListSlice.actions;

export default productListSlice.reducer;
