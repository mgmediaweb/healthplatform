import { createSlice } from '@reduxjs/toolkit';
import { getWeather } from './connection';

const initialState = {
  currentWeather: {},
  status: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: {
    [getWeather.pending]: (state) => ({
      ...state,
      status: 'loading',
    }),
    [getWeather.fulfilled]: (state, action) => ({
      ...state,
      status: 'success',
      currentWeather: action.payload,
    }),
    [getWeather.rejected]: (state) => ({
      ...state,
      status: 'failed',
    }),
  },
});

export default weatherSlice.reducer;
