const ApiService = {
    async fetchJson(url, init) {
        return fetch(url, init)
            .then((response) => response.json())
            .catch((error) => {
                window.console.error(error);
                return { error };
            })

    },

    async fetchStations() {
        return this.fetchJson(
            'https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json',
            {
                method: 'GET',
                headers: { 'Client-Identifier': 'Bike a Boogie'}
            },
        )
    },

    async fetchStationStatus() {
        return this.fetchJson(
            'https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json',
            {
                method: 'GET',
                headers: { 'Client-Identifier': 'Bike a Boogie'}
            },
        )
    }
}

export default ApiService;
