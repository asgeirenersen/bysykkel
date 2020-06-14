import React from 'react';
import PropTypes  from 'prop-types';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBicycle, faLockOpen} from '@fortawesome/free-solid-svg-icons'

const statusShape = PropTypes.shape({
    num_bikes_available: PropTypes.number,
    num_docks_available: PropTypes.number,
});

export const stationShape = PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    status: statusShape,
});

export function StationStatus(props) {
    const {num_bikes_available, num_docks_available} = props.status;
    const bikesColor = num_bikes_available > 0 ? 'green' : 'red';
    const docksColor = num_docks_available > 0 ? 'green' : 'red';

    return (<span className="stationStatus">
        <span className="statusItem bikes">
            <FontAwesomeIcon icon={faBicycle} color={bikesColor} title="Number of available bikes"/>
            <span className="statusValue">
                {num_bikes_available}
            </span>
        </span>
        <span className="statusItem docks">
            <FontAwesomeIcon icon={faLockOpen} color={docksColor} title="Number of available docs"/>
            <span className="statusValue">
                {num_docks_available}
            </span>
        </span>
    </span>);
}

StationStatus.propTypes = {
    status: statusShape,
};

function Station(props) {
    const {station} = props;
    const {name, address, status} = station;
    return (<li className="station" key={station.station_id}>
        <span className="stationName">
            {`${name}, ${address}`}
        </span>
        {
            station.status
                ? <StationStatus status={status}/>
                : <span className="statusNotAvailable">Status not available!</span>

        }
    </li>)
}

Station.propTypes = {
    station: stationShape.isRequired,
};

export default Station;
