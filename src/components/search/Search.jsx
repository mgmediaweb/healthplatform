import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getWeather } from '../../redux/connection'
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import './Search.scss';

const Search = (props) => {
  const { button, city } = props;
  const [ selectedCity, setSelectedCity ] = useState(null);
  const { status } = useSelector((state) => state.weather);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSelectedCity(e.target.search.value);
    dispatch(getWeather(e.target.search.value));
  };

  useEffect(() => {
    if ((status === 'success') && (selectedCity)) navigate(`/detail/${selectedCity}`);
  }, [status, navigate, selectedCity]);

  return (
    <form id="city-form" onSubmit={handleSubmit}>
      <div className="input-full">
        <SearchOutlinedIcon className="icon" />
        <input
          type="text"
          name="search"
          autoComplete="off"
          defaultValue={city}
          placeholder="Enter a city"
        />
        <MicOutlinedIcon className="icon" />
        <CameraAltOutlinedIcon className="icon" />
      </div>
      {
        button && (
          <div className='button-bars'>
            <button type="submit">Search</button>
          </div>
        )
      }
    </form>

  );
}

export default Search;