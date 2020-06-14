import React from 'react';
import PropTypes from 'prop-types';

import Station, {stationShape} from './Station';
import './Stations.scss';

function Stations(props) {
    const { stations, selectedStationId, setSelectedStationId, mapView } = props;
    return (<div id="STATIONS_WRAPPER">
        <ol className="stationsList">
            {
                stations.map((station) => {
                    const showMap = selectedStationId === station.station_id && mapView !== null;
                    return (<Station
                        station={station}
                        key={station.station_id}
                        setSelectedStationId={setSelectedStationId}
                        selectedStationId={selectedStationId}
                        mapView={showMap ? mapView : null}
                    />);
                })
            }
        </ol>
    </div>);
}

Stations.propTypes = {
    stations: PropTypes.arrayOf(stationShape).isRequired,
    setSelectedStationId: PropTypes.func.isRequired,
    selectedStationId: PropTypes.string,
    mapView: PropTypes.element,
};

export default Stations;
