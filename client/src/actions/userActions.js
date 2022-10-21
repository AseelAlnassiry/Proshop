//Redux
import { login_request, login_success, login_fail } from '../slicers/userSlice';

//Axios
import axios from 'axios';

export const userData = async (dispatch, id) => {
  try {
    dispatch(login_request());
    
  } catch (err) {
  }
};
