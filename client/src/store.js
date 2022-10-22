//Redux
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import productListSlice from './slicers/productListSlice';
import productSlice from './slicers/productSlice';
import cartSlice from './slicers/cartSlice';
import userSlice from './slicers/userSlice';

const middleware = [thunk];

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const userDataFromStorage = localStorage.getItem('userData')
  ? JSON.parse(localStorage.getItem('userData'))
  : null;

const store = configureStore({
  reducer: {
    productsList: productListSlice,
    productData: productSlice,
    cartData: cartSlice,
    userData: userSlice,
  },
  preloadedState: {
    cartData: { cartItems: cartItemsFromStorage },
    userData: { user: userDataFromStorage },
  },
  middleware,
});

export default store;
