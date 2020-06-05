import React, {
    useEffect,
    useState,
} from 'react';

import StationsService from './services/StationsService';

import LoadingError from './components/error/LoadingError';
import Stations from './components/stations/Stations';
import Waiting from './components/waiting/Waiting';

import './App.scss';

function App() {
    const [stations, setStations] = useState([]);
    const [isLoading, setLoadingStatus] = useState(true);
    const [loadingError, setLoadingErrorStatus] = useState(false);

    useEffect(() => {
        StationsService
            .getStationsWithStatus()
            .then((stations) => StationsService.sortStationsAlphabetically(stations))
            .then((stations) => {
                setStations(stations);
                setLoadingStatus(false);
                setLoadingErrorStatus(false);
            })
            .catch((error) => {
                console.error(error);
                setLoadingStatus(false);
                setLoadingErrorStatus(true);
            })
    }, [isLoading, loadingError]);

    return (
        <div className="App">
            <header className="header">
                <h1>City Bikes</h1>
                <h2>Get it! Lock it! Beat it!</h2>
            </header>
            <main>
                {
                    isLoading
                        ? <Waiting/>
                        : loadingError
                            ? <LoadingError />
                            : <Stations stations={stations}/>
                }
            </main>
        </div>
    );
}

export default App;
