//Redux
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
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
      return { loading: false, user: action.payload };
    },
  },
});

export const { login_request, login_success, login_fail } = userSlice.actions;

export default userSlice.reducer;