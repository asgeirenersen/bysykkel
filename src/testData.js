export const mockStationsList = [
    { "station_id": "1009", "name": "Borgenveien", "address": "Slemsdalsveien 70B", "lat": 59.942742106473666, "lon": 10.703833031254021, "capacity": 10 },
    { "station_id": "970", "name": "Enerhaugen", "address": "S\u00f8rligata 2", "lat": 59.91320242563816, "lon": 10.767579386407874, "capacity": 25 },
    { "station_id": "787", "name": "Kirkegata 15", "address": "Kirkegata 15", "lat": 59.91015615055511, "lon": 10.743456971511705, "capacity": 12 },
    { "station_id": "1755", "name": "Aker Brygge", "address": "Aker Brygge", "lat": 59.91118372188379, "lon": 10.730034556850455, "capacity": 33 },
    { "station_id": "624", "name": "D\u00e6lenenggata", "address": "D\u00e6lenenggata 38", "lat": 59.9287502718149, "lon": 10.767546377298158, "capacity": 20 },
    { "station_id": "626", "name": "Drammensveien", "address": "Drammensveien 119", "lat": 59.9204038, "lon": 10.691147, "capacity": 24 },
];

export const mockStatusList = [
    {"station_id": "1755", "is_installed": 1, "is_renting": 1, "is_returning": 1, "last_reported": 1592125854, "num_bikes_available": 31, "num_docks_available": 0},
    {"station_id": "1009", "is_installed": 1, "is_renting": 1, "is_returning": 1, "last_reported": 1592125854, "num_bikes_available": 23, "num_docks_available": 1},
    {"station_id": "626", "is_installed": 1, "is_renting": 1, "is_returning": 1, "last_reported": 1592125854, "num_bikes_available": 2, "num_docks_available": 10},
    {"station_id": "787", "is_installed": 1, "is_renting": 1, "is_returning": 1, "last_reported": 1592125854, "num_bikes_available": 0, "num_docks_available": 10},
    {"station_id": "970", "is_installed": 1, "is_renting": 1, "is_returning": 1, "last_reported": 1592125854, "num_bikes_available": 14, "num_docks_available": 11},
    {"station_id": "624", "is_installed": 1, "is_renting": 1, "is_returning": 1, "last_reported": 1592125854, "num_bikes_available": 6, "num_docks_available": 6},
];

export const mockMergedLists = [
    { "station_id": "1009", "name": "Borgenveien", "address": "Slemsdalsveien 70B", "lat": 59.942742106473666, "lon": 10.703833031254021, "capacity": 10, status: mockStatusList[1] },
    { "station_id": "970", "name": "Enerhaugen", "address": "S\u00f8rligata 2", "lat": 59.91320242563816, "lon": 10.767579386407874, "capacity": 25, status: mockStatusList[4] },
    { "station_id": "787", "name": "Kirkegata 15", "address": "Kirkegata 15", "lat": 59.91015615055511, "lon": 10.743456971511705, "capacity": 12, status: mockStatusList[3] },
    { "station_id": "1755", "name": "Aker Brygge", "address": "Aker Brygge", "lat": 59.91118372188379, "lon": 10.730034556850455, "capacity": 33, status: mockStatusList[0] },
    { "station_id": "624", "name": "D\u00e6lenenggata", "address": "D\u00e6lenenggata 38", "lat": 59.9287502718149, "lon": 10.767546377298158, "capacity": 20, status: mockStatusList[5] },
    { "station_id": "626", "name": "Drammensveien", "address": "Drammensveien 119", "lat": 59.9204038, "lon": 10.691147, "capacity": 24, status: mockStatusList[2] },
];

export const mockStationsResponse = {"last_updated": 1592124725, "ttl": 10, "data": {"stations": mockStationsList}};
export const mockStatusResponse = {"last_updated": 1592124725, "ttl": 10, "data": {"stations": mockStatusList}};
