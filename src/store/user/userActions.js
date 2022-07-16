import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  logInUser,
  logOutUser,
  refreshUser,
  signUpUser,
} from '../../service/API';

export const signUp = createAsyncThunk(
  'user/signUp',
  (credentials, { rejectWithValue }) =>
    signUpUser(credentials)
      .then(res => res.data)
      .catch(err => rejectWithValue(err.response.data))
);

export const logIn = createAsyncThunk(
  'user/logIn',
  (credentials, { rejectWithValue }) =>
    logInUser(credentials)
      .then(res => res.data)
      .catch(err => rejectWithValue(err.response.data))
);

export const logOut = createAsyncThunk(
  'user/logOut',
  (_, { rejectWithValue }) =>
    logOutUser()
      .then(res => res.data)
      .catch(err => rejectWithValue(err.response.data))
);

export const refresh = createAsyncThunk(
  'user/refresh',
  (_, { rejectWithValue }) =>
    refreshUser()
      .then(res => res.data)
      .catch(err => rejectWithValue(err.response.data))
);
