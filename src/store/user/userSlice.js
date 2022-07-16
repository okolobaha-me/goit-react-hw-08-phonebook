import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refresh, signUp } from './userActions';
import { tokenOptions } from '../../service/API';

const initialState = {
  userData: {
    name: null,
    email: null,
  },
  isLoggedIn: false,
  token: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [signUp.fulfilled](state, { payload: { user, token } }) {
      state.userData = user;
      state.token = token;
      state.isLoggedIn = true;
      tokenOptions.set(token);
    },
    [signUp.rejected](state, { payload }) {
      console.log(payload);
    },
    [logIn.fulfilled](state, { payload: { user, token } }) {
      state.userData = user;
      state.token = token;
      state.isLoggedIn = true;
      tokenOptions.set(token);
    },
    [logIn.rejected]() {
      console.log('Wrong email or password');
    },
    [logOut.fulfilled](state) {
      state.userData = initialState.user;
      state.token = initialState.token;
      state.isLoggedIn = false;
    },
    [refresh.fulfilled](state, { payload }) {
      state.userData = payload;
      state.isLoggedIn = true;
    },
  },
});
