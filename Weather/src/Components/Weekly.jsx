import React from 'react';
import './Weekly.css';

const Weekly = ({ weeklyData }) => {
  const dailyForecasts = weeklyData.filter((_, index) => index % 8 === 0);

  const formatDate = (dt) => {
    const date = new Date(dt * 1000);
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  return (
    <div className="weekly-container">
      {dailyForecasts.length > 0 ? (
        dailyForecasts.map((forecast, index) => (
          <div className="weekly-box" key={index}>
            <h4>{formatDate(forecast.dt)}</h4>
            <img
              src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
              alt={forecast.weather[0].description}
              style={{ width: '50px', height: '50px' }}
            />
            <p><strong>{Math.round((forecast.main.temp)/10)}°C</strong></p>
            <p style={{ textTransform: 'capitalize' }}>{forecast.weather[0].description}</p>
          </div>
        ))
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Weekly;
