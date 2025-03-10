export class CompanyService {
    /**
     * @param {ApiClient} apiClient - The API client instance
     */
    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    /**
     * Get company chest shop statistics
     * @returns {Promise<object>}
     */
    getChestshopStats() {
        return this.apiClient.fetchJson('company/chestshop/stats');
    }

    /**
     * Set company description
     * A change via API costs 250 euros like at the citizen's office
     * @param {string} data - New company description
     * @returns {Promise<object>}
     */
    setDescription(data) {
        return this.apiClient.fetchJson('company/description/set', {
            data
        });
    }

    /**
     * Dismiss an employee
     * @param {string} uuid - Player UUID
     * @returns {Promise<object>}
     */
    dismiss(uuid) {
        Validators.validateUuid(uuid, 'uuid');

        return this.apiClient.fetchJson('company/dismiss', {
            uuid
        });
    }

    /**
     * Get company information
     * @returns {Promise<object>}
     */
    getInfo() {
        return this.apiClient.fetchJson('company/info');
    }

    /**
     * Set salary
     * @param {number} amount - Salary amount
     * @param {string} uuid - Player UUID
     * @returns {Promise<object>}
     */
    setLoan(amount, uuid) {
        Validators.validateUuid(uuid, 'uuid');

        return this.apiClient.fetchJson('company/loan/set', {
            amount,
            uuid
        });
    }

    /**
     * Set company name
     * A change via API costs 250 euros like at the citizen's office
     * @param {string} data - New company name
     * @returns {Promise<object>}
     */
    setName(data) {
        return this.apiClient.fetchJson('company/name/set', {
            data
        });
    }

    /**
     * Get state company sales statistics
     * @returns {Promise<object>}
     */
    getStatecompanyStats() {
        return this.apiClient.fetchJson('company/statecompany/stats');
    }
}