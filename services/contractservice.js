export class ContractService {
    /**
     * @param {ApiClient} apiClient - The API client instance
     */
    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    /**
     * Get contract information
     * You must have signed or created the contract
     * @param {string} [contract] - Contract ID
     * @returns {Promise<object>}
     */
    getInfo(contract = null) {
        return this.apiClient.fetchJson('contract', {
            contract
        });
    }
}