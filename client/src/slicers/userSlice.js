//Redux
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    login_request: (state, action) => {
      return { loading: true, user: null };
    },
    login_success: (state, action) => {
      return { loading: false, user: action.payload };
    },
    login_fail: (state, action) => {
      return { loading: false, error: action.payload };
    },
    logout_request: (state, action) => {
      return { loading: true, user: null };
    },
    logout_success: (state, action) => {
      return { loading: false, user: null };
    },
    logout_fail: (state, action) => {
      return { loading: false, error: action.payload };
    },
    register_request: (state, action) => {
      return { loading: true, user: null };
    },
    register_success: (state, action) => {
      return { loading: false, user: null };
    },
    register_fail: (state, action) => {
      return { loading: false, error: action.payload };
    },
  },
});

export const {
  login_request,
  login_success,
  login_fail,
  logout_request,
  logout_success,
  logout_fail,
  register_request,
  register_success,
  register_fail,
} = userSlice.actions;

export default userSlice.reducer;
