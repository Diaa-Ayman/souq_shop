import { createSlice } from '@reduxjs/toolkit';

const idToken = localStorage.getItem('token');
const initialState = {
  token: idToken,
  isLoggedIn: !!idToken,
};
const AuthSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    addToken(state, action) {
      const newToken = action.payload;
      state.token = newToken;
      state.isLoggedIn = true;
      localStorage.setItem('token', newToken);
    },
    removeToken(state) {
      localStorage.removeItem('token');
      state.isLoggedIn = false;
    },
  },
});

export const authActions = AuthSlice.actions;
export default AuthSlice;
