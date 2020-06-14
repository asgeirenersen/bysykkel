import React from 'react';
import PropTypes from 'prop-types';

import MapView from '../mapView/MapView';
import Stations from './Stations';
import {stationShape} from './Station';

import './StationsWithMap.scss';

function StationsWithMap(props) {
    const { stations, selectedStationId, screenCategory, setSelectedStationId } = props;

    function getMapView() {
        return (<MapView
            key="THE_ONE_AND_ONLY_MAP"
            stations={stations}
            screenCategory={screenCategory}
            selectedStationId={selectedStationId}
        />);
    }

    return (<div id="STATIONS_WITH_MAPS" className={screenCategory}>
        <h3>Stations</h3>
        <div className="wrapper">
            <Stations
                stations={stations}
                selectedStationId={selectedStationId}
                setSelectedStationId={setSelectedStationId}
                mapView={screenCategory === 'small' ? getMapView() : null}
            />
            {
                screenCategory === 'big'
                    ? getMapView()
                    : null
            }
        </div>
    </div>);
}

StationsWithMap.propTypes = {
    stations: PropTypes.arrayOf(stationShape).isRequired,
    selectedStationId: PropTypes.string,
    setSelectedStationId: PropTypes.func.isRequired,
    screenCategory: PropTypes.oneOf(['big', 'small']).isRequired,
};

export default StationsWithMap;
