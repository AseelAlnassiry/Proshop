//Redux
import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    product: {},
  },
  reducers: {
    request: (state, action) => {
      return { loading: true, product: {} };
    },
    success: (state, action) => {
      return { loading: false, product: action.payload };
    },
    fail: (state, action) => {
      return { loading: false, error: action.payload };
    },
  },
});

export const { request, success, fail } = productSlice.actions;

export default productSlice.reducer;