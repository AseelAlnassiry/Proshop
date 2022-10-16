import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import productSlice from './slicers/productSlice';

const middleware = [thunk];

const reducer = combineReducers({
  productsList: productSlice,
});

const store = configureStore({
  reducer,
  preloadedState: {},
  middleware,
});

export default store;
