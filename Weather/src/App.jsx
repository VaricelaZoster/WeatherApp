import React, { useState } from 'react';
import Topbar from './Components/Topbar';
import MainInfo from './Components/MainInfo';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <div>
      <Topbar setWeatherData={setWeatherData} />
      <MainInfo weatherData={weatherData} />
    </div>
  );
};

export default App;
