import React, { useState } from 'react';
import './Topbar.css'

const Topbar = ({ setWeatherData }) => {
  const [city, setCity] = useState('');
  const [searchLabel, setSearchLabel] = useState('Weather');

  const apiKey = "8a5bbdfe6738f53c7006c6f535ae9be6";

  const handleKeyDown = async (e) => {
    if (e.key === 'Enter' && city.trim() !== '') {
      setSearchLabel(city);

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        console.log('Full API response:', data); // Logs everything

        setWeatherData({
          temp: data.main.temp,
          feels_like: data.main.feels_like,
          desc: data.weather[0].description,
          icon: data.weather[0].icon,
          humidity: data.main.humidity,
          wind: data.wind.speed,
          clouds: data.clouds.all,
          visibility: data.visibility,
        });
      } catch (error) {
        console.error('Error fetching weather data:', error);
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
