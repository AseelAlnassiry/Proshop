//Redux
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import productListSlice from './slicers/productListSlice';
import productSlice from './slicers/productSlice';
import cartSlice from './slicers/cartSlice';

const middleware = [thunk];

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

const store = configureStore({
  reducer: {
    productsList: productListSlice,
    productData: productSlice,
    cartData: cartSlice,
  },
  preloadedState: {
    cartData: { cartItems: cartItemsFromStorage },
  },
  middleware,
});

export default store;
