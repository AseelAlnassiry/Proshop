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

const userLoginFromStorage = localStorage.getItem('userLogin')
  ? JSON.parse(localStorage.getItem('userLogin'))
  : null;

const store = configureStore({
  reducer: {
    productsList: productListSlice,
    productData: productSlice,
    cartData: cartSlice,
    userLogin: userSlice,
  },
  preloadedState: {
    cartData: { cartItems: cartItemsFromStorage },
    userLogin: { userLogin: userLoginFromStorage },
  },
  middleware,
});

export default store;
