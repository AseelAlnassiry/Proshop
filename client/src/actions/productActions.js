//Redux
import { request, success, fail } from '../slicers/productSlice';

//Axios
import axios from 'axios';

export const productData = async (dispatch, id) => {
  try {
    dispatch(request());
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch(success(data));
  } catch (err) {
    const error = err.response && err.response.data.message ? err.response.data.message : err.message;
    dispatch(fail(error));
  }
};
