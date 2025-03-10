export class ProtectionService {
    /**
     * @param {ApiClient} apiClient - The API client instance
     */
    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    /**
     * Get protection information
     * @param {number} x - X coordinate
     * @param {number} y - Y coordinate
     * @param {number} z - Z coordinate
     * @returns {Promise<object>}
     */
    getInfo(x, y, z) {
        return this.apiClient.fetchJson('protection/info', {
            x,
            y,
            z
        });
    }

    /**
     * Add player to protection
     * @param {string} uuid - Player UUID
     * @param {number} x - X coordinate
     * @param {number} y - Y coordinate
     * @param {number} z - Z coordinate
     * @returns {Promise<object>}
     */
    addPlayer(uuid, x, y, z) {
        Validators.validateUuid(uuid, 'uuid');

        return this.apiClient.fetchJson('protection/player/add', {
            uuid,
            x,
            y,
            z
        });
    }

    /**
     * Remove player from protection
     * @param {string} uuid - Player UUID
     * @param {number} x - X coordinate
     * @param {number} y - Y coordinate
     * @param {number} z - Z coordinate
     * @returns {Promise<object>}
     */
    removePlayer(uuid, x, y, z) {
        Validators.validateUuid(uuid, 'uuid');

        return this.apiClient.fetchJson('protection/player/remove', {
            uuid,
            x,
            y,
            z
        });
    }
}