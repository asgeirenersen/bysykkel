import React, {useEffect, useState} from 'react';
import PropTypes  from 'prop-types';

import './MapView.scss';
import {stationShape} from '../stations/Station';

let mapInstance = null;
let apiStatus = 'NOT_LOADED';
const markerCache = {};

function loadMapsApi(onReady) {
    apiStatus = 'LOADING';
    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCk4M4fnv_rm7v2dSToQp1_ISpdf28gn24&callback=initMap';
    script.defer = true;
    script.async = true;

    window.initMap = function() {
        apiStatus = 'LOADED';
        onReady();
    };

    document.head.appendChild(script);
}

function createMap() {
    mapInstance = new window.google.maps.Map(document.getElementById("MAP_WRAPPER"), {
        center: { lat: 59.9123341, lng: 10.752292 }, // Oslo City
        zoom: 15
    });
}

export function setMarkers(stations, selectedStationId) {
    const maps = window.google.maps;
    return stations.forEach((station) => {
        const { station_id, name, address, lon, lat } = station;
        if (markerCache[station_id] === undefined) {
            markerCache[station_id] = new maps.Marker({
                map: mapInstance,
                title: `${name}, ${address}`,
                position: {lat, lng: lon},
            });
        }
        markerCache[station_id].setMap(mapInstance);
        if (station_id === selectedStationId) {
            markerCache[station_id].setAnimation(maps.Animation.BOUNCE);
        } else {
            markerCache[station_id].setAnimation(null);
        }
    });
}

function centerMap(stations, selectedStationId) {
    const selectedStation = stations
        .find((station) => station.station_id === selectedStationId);

    if (selectedStation !== undefined && mapInstance !== null) {
        mapInstance.setCenter({lat: selectedStation.lat, lng: selectedStation.lon});
    }
}

function MapView(props) {
    const { stations, selectedStationId, screenCategory } = props;

    useEffect(() => {
        if (apiStatus === 'NOT_LOADED') {
            loadMapsApi(() => {
                createMap();
                setMarkers(stations, selectedStationId);
            });
        }
    }, [true]);

    useEffect(() => {
        if (window.google?.maps) {
            createMap();
            setMarkers(stations, selectedStationId);
            centerMap(stations, selectedStationId);
        }
    });

    return (<div id="MAP_WRAPPER" />);
}

MapView.propTypes = {
    stations: PropTypes.arrayOf(stationShape).isRequired,
    selectedStationId: PropTypes.string,
    setSelectedStationId: PropTypes.func.isRequired,
    screenCategory: PropTypes.oneOf(['big', 'small']).isRequired,
};

export default MapView;
