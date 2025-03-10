export class BizService {
    /**
     * @param {ApiClient} apiClient - The API client instance
     */
    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    /**
     * Get business information
     * @param {number} bizId - Business ID
     * @returns {Promise<object>}
     */
    getInfo(bizId) {
        return this.apiClient.fetchJson('biz/info', {
            bizId
        });
    }
}