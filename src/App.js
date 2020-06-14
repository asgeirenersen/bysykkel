import React, {
    useEffect,
    useState,
} from 'react';

import StationsService from './services/StationsService';

import LoadingError from './components/error/LoadingError';
import StationsWithMap from './components/stations/StationsWithMap';
import Waiting from './components/waiting/Waiting';

import './App.scss';

export function getScreenCategoryFromWidth() {
    return window.innerWidth > 1024 ? 'big' : 'small';
}

function App() {
    const [screenCategory, setScreenCategory] = useState(getScreenCategoryFromWidth());
    const [stations, setStations] = useState([]);
    const [selectedStationId, setSelectedStationId] = useState();
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

    useEffect(() => {
        const handler = () => {
            setScreenCategory(getScreenCategoryFromWidth());
        };
        window.addEventListener('resize', handler);

        return () => {
            window.removeEventListener('resize', handler);
        }
    }, [screenCategory]);

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
                            : <StationsWithMap
                                stations={stations}
                                screenCategory={screenCategory}
                                selectedStationId={selectedStationId}
                                setSelectedStationId={setSelectedStationId}
                                />
                }
            </main>
        </div>
    );
}

export default App;
