/* eslint-disable no-unused-expressions */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Search from '../components/search/Search';
import WeatherBox from '../components/weatherBox/WeatherBox';
import Forecast from '../components/Forecast/Forecast';
import '../App.scss';

const DetailScreen = () => {
  const { city } = useParams();
  const { currentWeather } = useSelector((state) => state.weather);

  return (
    <div className='weather-screen'>
      <Search city={city} button={false} />

      {
        currentWeather ? (
          <>
            <header>
              <h3>Current Weater</h3>
              <h1>{currentWeather.location.name}</h1>
              <p>{currentWeather.current_weather.date}</p>
            </header>      

            <WeatherBox data={currentWeather.current_weather} />

            <div className="weather-window">
              <h3>5 Days Forecast</h3>
              <Forecast data={currentWeather.forecast} />
            </div>
          </>
        ) : (
          <div className="winError">
            <h3>The city is not available.</h3>
          </div>
        )
      }
    </div>
  );
}

export default DetailScreen;