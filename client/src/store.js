//Redux
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import productListSlice from './slicers/productListSlice';
import productSlice from './slicers/productSlice';

const middleware = [thunk];

const store = configureStore({
  reducer: {
    productsList: productListSlice,
    productData: productSlice,
  },
  preloadedState: {},
  middleware,
});

export default store;
