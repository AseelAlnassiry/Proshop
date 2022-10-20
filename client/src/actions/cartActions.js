//Redux
import { cart_addItem, cart_removeItem } from '../slicers/cartSlice';

//Axios
import axios from 'axios';

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);
  const cartItem = {
    product: data._id,
    name: data.name,
    image: data.image,
    price: data.price,
    countInStock: data.countInStock,
    qty,
  };

  dispatch(cart_addItem(cartItem));
  localStorage.setItem('cartItems', JSON.stringify(getState().cartData.cartItems));
};

export const removeFromCart = (id) => async(dispatch, getState) => {
  dispatch(cart_removeItem(id))
  localStorage.setItem('cartItems', JSON.stringify(getState().cartData.cartItems))
}
