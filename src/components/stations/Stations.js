import React from 'react';

function Stations(props) {
    return (<div id="stations">
        <h3>Stations</h3>
        <ol>
            {
                props.stations.map((station) => {
                    return (<li key={station.station_id}>
                        {`${station.name}, ${station.address}`}
                    </li>);
                })
            }
        </ol>
    </div>);
}

export default Stations;
