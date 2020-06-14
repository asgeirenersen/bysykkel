import React from 'react';
import PropTypes from 'prop-types';

import Station, {stationShape} from './Station';
import './Stations.scss';

function Stations(props) {
    const { stations, selectedStationId, setSelectedStationId} = props;
    return (<div id="STATIONS_WRAPPER">
        <h3>Stations</h3>
        <ol className="stationsList">
            {
                stations.map((station) => {
                    return (<Station
                        station={station}
                        key={station.station_id}
                        setSelectedStationId={setSelectedStationId}
                        selectedStationId={selectedStationId}
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
};

export default Stations;
