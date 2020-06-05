import ApiService from './ApiService';

function addStatusToStations(stationsList, stationsStatusList) {
    const statuses = stationsStatusList.slice(0);
    const stations = stationsList.slice(0);

    return stations
        .map((station) => {
            const statusIndex = statuses.findIndex(status => status.station_id === station.station_id);
            if (statusIndex !== -1) {
                station.status = statuses[statusIndex];
                statuses.splice(statusIndex, 1);
            }
            return station;
        });
}

function stationSorter(station1, station2) {
    if (station1.name > station2.name) {
        return 1;
    } else if (station1.name < station2.name) {
        return -1;
    }
    return 0;
}

const StationsService = {
    async getStationsWithStatus() {
        let stations;
        let stationsStatus;

        await Promise.all([
            ApiService
                .fetchStations()
                .then((response) => {
                    if (response && response.data) {
                        stations = response.data.stations;
                    }
                }),
            ApiService
                .fetchStationStatus()
                .then((response) => {
                    if (response && response.data) {
                        stationsStatus = response.data.stations;
                    }
                }),
        ]);

        if (stations && stationsStatus) {
            return addStatusToStations(stations, stationsStatus);
        } else if (stations) {
            return stations;
        }
        return [];
    },

    sortStationsAlphabetically(stationsList) {
        const stations = stationsList.slice(0);
        return stations.sort(stationSorter);
    },
};

export default StationsService;
