export class WorldService {
    /**
     * @param {ApiClient} apiClient - The API client instance
     */
    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    /**
     * Clear block inventory
     * The block must be secured. If the 'loadChunks' parameter is set to 'true', the server loads the chunk, otherwise an error is returned. If a chunk is loaded, 2 additional requests are deducted from your limit.
     * @param {number} y - Y coordinate
     * @param {number} x - X coordinate
     * @param {number} z - Z coordinate
     * @param {boolean} [loadChunks] - Whether to load chunks
     * @returns {Promise<object>}
     */
    clearInventory(y, x, z, loadChunks = null) {
        return this.apiClient.fetchJson('world/clear/inventory', {
            y,
            x,
            z,
            loadChunks
        });
    }

    /**
     * Get block inventory
     * The block must be secured. If the 'loadChunks' parameter is set to 'true', the server loads the chunk, otherwise an error is returned. If a chunk is loaded, 2 additional requests are deducted from your limit.
     * @param {number} y - Y coordinate
     * @param {number} x - X coordinate
     * @param {number} z - Z coordinate
     * @param {boolean} [loadChunks] - Whether to load chunks
     * @returns {Promise<object>}
     */
    getInventory(y, x, z, loadChunks = null) {
        return this.apiClient.fetchJson('world/inventory', {
            y,
            x,
            z,
            loadChunks
        });
    }

    /**
     * Move item
     * Both blocks must be secured and on the same property. If the 'loadChunks' parameter is set to 'true', the server loads the chunk, otherwise an error is returned. If a chunk is loaded, 2 additional requests are deducted from your limit.
     * @param {number} amount - Item amount
     * @param {number} fromSlot - Source slot
     * @param {number} fromX - Source X coordinate
     * @param {number} fromY - Source Y coordinate
     * @param {number} fromZ - Source Z coordinate
     * @param {number} toSlot - Target slot
     * @param {number} toX - Target X coordinate
     * @param {number} toY - Target Y coordinate
     * @param {number} toZ - Target Z coordinate
     * @param {boolean} [loadChunks] - Whether to load chunks
     * @returns {Promise<object>}
     */
    moveItem(amount, fromSlot, fromX, fromY, fromZ, toSlot, toX, toY, toZ, loadChunks = null) {
        return this.apiClient.fetchJson('world/move/item', {
            amount,
            fromSlot,
            fromX,
            fromY,
            fromZ,
            toSlot,
            toX,
            toY,
            toZ,
            loadChunks
        });
    }
}