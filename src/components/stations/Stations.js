import React from 'react';
import Station from './Station';
import './Stations.scss';

function Stations(props) {
    return (<div id="stations">
        <h3>Stations</h3>
        <ol>
            {
                props.stations.map((station) => {
                    return (<Station station={station} key={station.station_id} />);
                })
            }
        </ol>
    </div>);
}

export default Stations;
