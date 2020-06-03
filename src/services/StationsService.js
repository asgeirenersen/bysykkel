import ApiService from './ApiService';

function getStatusForStations(stationsList, stationsStatusList) {
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

const StationsService = {
    async getStationsWithStatus() {
        let stations;
        let stationsStatus;

        await Promise.all([
            ApiService
                .fetchStations()
                .then((response) => {
                    stations = response?.data?.stations;
                }),
            ApiService
                .fetchStationStatus()
                .then((response) => {
                    stationsStatus = response?.data?.stations;
                }),
        ]);

        if (stations && stationsStatus) {
            return getStatusForStations(stations, stationsStatus);
        } else if (stations) {
            return stations;
        }
        return [];
    }
};

export default StationsService;
