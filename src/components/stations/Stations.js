import React from 'react';

function Stations(props) {
    return (<div id="stations">
        <h3>Stations</h3>
        <ol>
            {
                props.stations.map((station) => {
                    const { name, address, status } = station;
                    return (<li className="station" key={station.station_id}>
                        <span className="stationName">
                            {`${name}, ${address}`}
                        </span>
                        <span className="stationStatus">
                            {
                                station.status 
                                    ? `Bikes: ${status.num_bikes_available}, docks: ${status.num_docks_available}`
                                    : 'Status not available.'
                            
                            }
                        </span>
                    </li>);
                })
            }
        </ol>
    </div>);
}

export default Stations;
