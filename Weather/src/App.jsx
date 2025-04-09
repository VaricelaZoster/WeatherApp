import React, { useState } from 'react';
import Topbar from './Components/Topbar';
import MainInfo from './Components/MainInfo';
import Weekly from './Components/Weekly';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [weeklyData, setWeeklyData] = useState([]);

  return (
    <div>
      <Topbar setWeatherData={setWeatherData} setWeeklyData={setWeeklyData} />
      <MainInfo weatherData={weatherData} />
      <Weekly weeklyData={weeklyData} />
    </div>
  );
};

export default App;
