import React, {useEffect} from 'react';
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

let clickHandler;
function onClick(event) {
    if (clickHandler) {
        const stationId = event.currentTarget.dataset.station_id;
        clickHandler(stationId);
    }
}

function Station(props) {
    const {station, selectedStationId, setSelectedStationId, mapView} = props;
    const {station_id, name, address, status} = station;
    const classNames = ['station'];
    if (selectedStationId === station_id) {
        classNames.push('selected');
    }

    useEffect(() => {
        clickHandler = setSelectedStationId;
    }, [setSelectedStationId]);

    return (<li
        data-station_id={station_id}
        className={classNames.join(' ')}
        key={station_id}
        onClick={onClick}
    >
        <div className="stationInfo">
            <span className="stationName">
                {`${name}, ${address}`}
            </span>
            {
                station.status
                    ? <StationStatus status={status}/>
                    : <span className="statusNotAvailable">Status not available!</span>

            }
        </div>
        { mapView }
    </li>)
}

Station.propTypes = {
    station: stationShape.isRequired,
    setSelectedStationId: PropTypes.func.isRequired,
    selectedStationId: PropTypes.string,
    mapView: PropTypes.element,
};

export default Station;
