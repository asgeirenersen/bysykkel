import React, {
  useEffect,
  useState,
} from 'react';

import Waiting from './components/waiting/Waiting';
import Stations from './components/stations/Stations';

import './App.css';

function App() {
  const [stations, setStations] = useState([]);
  const [isLoading, setLoadingStatus] = useState(true);
  const [loadingError, setLoadingErrorStatus] = useState(false);

  useEffect(() => {
    fetch(
      'https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json',
      {
        method: 'GET',
        headers: { 'Client-Identifier': 'Bike a Boogie'}
      },
    )
    .then(response => response.json())
    .then((body) => {
      if (body.data.stations) {
        setStations(body.data.stations);
      }
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
