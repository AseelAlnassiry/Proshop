//Redux
import { login_request, login_success, login_fail } from '../slicers/userLoginSlice';

//Axios
import axios from 'axios';

export const login = (email, password) => async (dispatch, id) => {
  try {
    dispatch(login_request());
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post('/api/users/login', { email, password }, config);
    dispatch(login_success(data));
    localStorage.setItem('userLogin', JSON.stringify(data));
  } catch (err) {
    const error =
      err.response && err.response.data.message ? err.response.data.message : err.message;
    dispatch(login_fail(error));
  }
};
