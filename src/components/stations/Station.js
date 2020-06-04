import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBicycle, faLockOpen } from '@fortawesome/free-solid-svg-icons'

function StationStatus(props) { 
    const { num_bikes_available, num_docks_available } = props.status;
    const bikesColor = num_bikes_available > 0 ? 'green' : 'red';
    const docksColor = num_docks_available > 0 ? 'green' : 'red'; 

    return (<span className="stationStatus">
        <span className="statusItem">
            <FontAwesomeIcon icon={faBicycle} color={bikesColor} title="Number of available bikes" />
            <span className="statusValue">
                {num_bikes_available}
            </span>
        </span>
        <span className="statusItem">
            <FontAwesomeIcon icon={faLockOpen} color={docksColor} title="Number of available docs" />
            <span className="statusValue">
                {num_docks_available}
            </span>   
        </span>

    </span>);
}

function Station(props) {
    const { station } = props;
    const { name, address, status } = station;
    return (<li className="station" key={station.station_id}>
        <span className="stationName">
            {`${name}, ${address}`}
        </span>
        {
            station.status 
                ? <StationStatus status={status} />
                : <span className="statusNotAvailable">Status not available!</span>
        
        }
    </li>)
}

export default Station;
