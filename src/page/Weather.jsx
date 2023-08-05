import React, { useState } from 'react';
// import { css } from '@emotion/react';
import axios from 'axios';
import { useParams } from 'react-router';

const Weather = () => {
  const routeParam = useParams();
  console.log(routeParam);

  const [location, setLocation] = useState('');
  const [weatherTxt, setWeatherTxt] = useState({});
  const API_KEY = 'dcd670f0c25b6cfb68061cc5dea79335';

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

  const searchWeahter = async (e) => {
    if (e.key === 'Enter') {
      try {
        const data = await axios({
          method: 'get',
          url: url,
        });
        setWeatherTxt(data);
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        onKeyDown={(e) => searchWeahter(e)}
      />
      {Object.keys(weatherTxt).length !== 0 && (
        <div>
          <strong>{weatherTxt.data.name}</strong>
          <br />
          <strong>{weatherTxt.data.main.temp}</strong>
          <br />
          <strong>{weatherTxt.data.weather[0].main}</strong>
        </div>
      )}
    </div>
  );
};

export default Weather;
