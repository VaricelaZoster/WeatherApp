import React from 'react';
import './MainInfo.css';

const MainInfo = ({ weatherData }) => {
  if (!weatherData) return null; 

  return (
    <div className="main-info">
      <div className="info-box weather-box">
        <img
          src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
          alt="Weather icon"
          className="weather-icon"
        />
        <h1 className="temp">{Math.round(weatherData.temp)}°C</h1>
        <p className="feels">feels like {Math.round(weatherData.feels_like)}°C</p>
        <p className="desc">{weatherData.desc}</p>
      </div>

      <div className="info-box details-box">
        <div className="grid-box">
          <div className="grid-item">🍃 {weatherData.wind} m/s<br /><span>Wind</span></div>
          <div className="grid-item">💦 {weatherData.humidity} %<br /><span>Humidity</span></div>
          <div className="grid-item">☁️ {weatherData.clouds} %<br /><span>Clouds</span></div>
          <div className="grid-item">👁️ {(weatherData.visibility / 1000).toFixed(1)} km<br /><span>Visibility</span></div>
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
