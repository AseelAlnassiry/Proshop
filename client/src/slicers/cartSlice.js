//Redux
import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    cart_addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((x) => x.product === item.product);
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) => (x.product === existingItem.product ? item : x)),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    },

    cart_removeItem: (state, action) => {
      return { ...state, cartItems: state.cartItems.filter((x) => x.product != action.payload) };
    },
  },
});

export const { cart_addItem, cart_removeItem } = cartSlice.actions;
export default cartSlice.reducer;
