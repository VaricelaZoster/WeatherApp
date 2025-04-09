import React, { useState } from 'react';
import './Topbar.css';

const Topbar = ({ setWeatherData, setWeeklyData }) => {
  const [city, setCity] = useState('');
  const [searchLabel, setSearchLabel] = useState('Weather');
  const apiKey = ""

  const handleKeyDown = async (e) => {
    if (e.key === 'Enter' && city.trim() !== '') {
      const cityName = city.trim();
      setSearchLabel(cityName);

      try {
        const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
        const currentRes = await fetch(currentUrl);
        const currentData = await currentRes.json();

        setWeatherData({
          temp: currentData.main.temp,
          feels_like: currentData.main.feels_like,
          desc: currentData.weather[0].description,
          icon: currentData.weather[0].icon,
          humidity: currentData.main.humidity,
          wind: currentData.wind.speed,
          clouds: currentData.clouds.all,
          visibility: currentData.visibility,
        });

        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`
        const forecastRes = await fetch(forecastUrl);
        const forecastData = await forecastRes.json();
        console.log(forecastData)

        if (forecastData.list) {
          setWeeklyData(forecastData.list); // pass array of 7-day forecast
        }

      } catch (err) {
        console.error('Error fetching data:', err);
      }

      setCity('');
    }
  };

  return (
    <div className="topbar">
      <div className="logo">{searchLabel}</div>
      <input
        type="text"
        className="search-input"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter city..."
      />
    </div>
  );
};

export default Topbar;
