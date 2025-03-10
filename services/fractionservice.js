export class FractionService {
    /**
     * @param {ApiClient} apiClient - The API client instance
     */
    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    /**
     * Get fraction information
     * You must be employed in a fraction at least as leader or co-leader
     * @param {string} [fraction] - Fraction ID
     * @returns {Promise<object>}
     */
    getInfo(fraction = null) {
        return this.apiClient.fetchJson('fraction/info', {
            fraction
        });
    }

    /**
     * Get fraction vehicles
     * You must be employed in a fraction at least as leader or co-leader
     * @param {string} [fraction] - Fraction ID
     * @returns {Promise<object>}
     */
    getVehicles(fraction = null) {
        return this.apiClient.fetchJson('fraction/vehicles', {
            fraction
        });
    }

    /**
     * Get vital values of members
     * You must be employed in a fraction at least as leader or co-leader
     * @param {string} [fraction] - Fraction ID
     * @returns {Promise<object>}
     */
    getVital(fraction = null) {
        return this.apiClient.fetchJson('fraction/vital', {
            fraction
        });
    }
}