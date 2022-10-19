//Redux
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import productListSlice from './slicers/productListSlice';
import productSlice from './slicers/productSlice';
import cartSlice from './slicers/cartSlice';

const middleware = [thunk];

const store = configureStore({
  reducer: {
    productsList: productListSlice,
    productData: productSlice,
    cartData: cartSlice,
  },
  preloadedState: {},
  middleware,
});

export default store;
