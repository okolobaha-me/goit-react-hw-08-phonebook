import { createSlice } from '@reduxjs/toolkit';
import { refresh } from '../user/userActions';

export const loadingStatusSlice = createSlice({
  name: 'loadingStatus',
  initialState: { isRefreshing: false },
  extraReducers: {
    [refresh.pending](state) {
      state.isRefreshing = true;
    },
    [refresh.fulfilled](state) {
      state.isRefreshing = false;
    },
    [refresh.rejected](state) {
      state.isRefreshing = false;
    },
  },
});
