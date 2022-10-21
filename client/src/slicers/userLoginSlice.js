//Redux
import { createSlice } from '@reduxjs/toolkit';

export const userLoginSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
  },
  reducers: {
    login_request: (state, action) => {
      return { loading: true, user: {} };
    },
    login_success: (state, action) => {
      return { loading: false, user: action.payload };
    },
    login_fail: (state, action) => {
      return { loading: false, error: action.payload };
    },
    logout_request: (state, action) => {
      return { loading: true, user: action.payload };
    },
    logout_success: (state, action) => {
      return { loading: false, user: {} };
    },
  },
});

export const { login_request, login_success, login_fail } = userLoginSlice.actions;

export default userLoginSlice.reducer;
