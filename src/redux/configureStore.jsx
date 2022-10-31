import { configureStore } from '@reduxjs/toolkit';
import weatherSlice from './weather';

const reducer = {
  weather: weatherSlice,
};

const store = configureStore({
  reducer,
});

export default store;
