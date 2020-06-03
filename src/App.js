import React, {
  useEffect,
  useState,
} from 'react';

import StationsService from './services/StationsService';

import Waiting from './components/waiting/Waiting';
import Stations from './components/stations/Stations';

import './App.css';

function App() {
  const [stations, setStations] = useState([]);
  const [isLoading, setLoadingStatus] = useState(true);
  const [loadingError, setLoadingErrorStatus] = useState(false);

  useEffect(() => {
    StationsService
      .getStationsWithStatus()
      .then((stations) => {
        setStations(stations);
        setLoadingStatus(false);
      })
      .catch((error) => {
        setLoadingErrorStatus(true);
      })
  }, [isLoading, loadingError]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>City Bikes</h1>
        <h2>Get it! Lock it! Beat it!</h2>
      </header>
      <main>
        {
          isLoading && stations.length === 0
            ? <Waiting />
            : <Stations stations={stations} />
        }
      </main>
    </div>
  );
}

export default App;
