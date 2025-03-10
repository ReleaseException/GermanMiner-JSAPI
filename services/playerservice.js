export class PlayerService {
    /**
     * @param {ApiClient} apiClient - The API client instance
     */
    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    /**
     * Get player information
     * Returns information about the owner of the API key
     * @returns {Promise<object>}
     */
    getInfo() {
        return this.apiClient.fetchJson('player/info');
    }

    /**
     * Get player vehicles
     * Returns information about the vehicles of the API key owner
     * @returns {Promise<object>}
     */
    getVehicles() {
        return this.apiClient.fetchJson('player/vehicles');
    }

    /**
     * Get vital values
     * Returns the vital values of the API key owner
     * @param {string} [uuid] - Player UUID
     * @returns {Promise<object>}
     */
    getVital(uuid = null) {
        return this.apiClient.fetchJson('player/vital', {
            uuid
        });
    }
}