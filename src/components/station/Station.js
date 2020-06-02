import React from 'react';
import { useParams } from 'react-router-dom';

function Station() {
    const { stationId } = useParams();
    return (<h3>Station id:{stationId}</h3>);
}

export default Station;
