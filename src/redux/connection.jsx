import { createAsyncThunk } from '@reduxjs/toolkit';

export const getWeather = createAsyncThunk(
  'weather/get',
  async (city = null) => {
    
    if(!city)  return null;

    const url = `https://simple-weather2.p.rapidapi.com/weather?location=${city}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'AIk5iFUrlWmshSf1R1ALTJQVrOFyp1QQtvijsnsCdwkjDVZYVi',
        'X-RapidAPI-Host': 'simple-weather2.p.rapidapi.com'
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      return null;
    }
  }
);

export default getWeather;
