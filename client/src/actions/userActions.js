//Redux
import {
  login_request,
  login_success,
  login_fail,
  logout_request,
  logout_success,
  logout_fail,
  register_request,
  register_success,
  register_fail,
} from '../slicers/userSlice';

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

export const logout = () => async (dispatch) => {
  try {
    dispatch(logout_request());
    localStorage.removeItem('userLogin');
    dispatch(logout_success());
  } catch (err) {
    const error =
      err.response && err.response.data.message ? err.response.data.message : err.message;
    dispatch(logout_fail(error));
  }
};

export const register = (email, password, name) => async (dispatch) => {
  try {
    dispatch(register_request());
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post('/api/users', { name, email, password }, config);
    dispatch(register_success());
    localStorage.setItem('userInfo', JSON.stringify(data));
    dispatch(login_success(data));
  } catch (err) {
    const error =
      err.response && err.response.data.message ? err.response.data.message : err.message;
    dispatch(register_fail(error));
  }
};
