export class BankService {
    /**
     * @param {ApiClient} apiClient - The API client instance
     */
    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    /**
     * Get bank activity statement
     * @param {string} accountNumber - Bank account number
     * @param {number} page - Page number
     * @returns {Promise<object>}
     */
    getActivityStatement(accountNumber, page) {
        Validators.validateAccountNumber(accountNumber, 'accountNumber');

        return this.apiClient.fetchJson('bank/activitystatement', {
            accountNumber,
            page
        });
    }

    /**
     * Get bank account information
     * @param {string} accountNumber - Bank account number
     * @returns {Promise<object>}
     */
    getInfo(accountNumber) {
        Validators.validateAccountNumber(accountNumber, 'accountNumber');

        return this.apiClient.fetchJson('bank/info', {
            accountNumber
        });
    }

    /**
     * List all bank accounts
     * Returns all bank accounts the API key owner has access to
     * @returns {Promise<object>}
     */
    getList() {
        return this.apiClient.fetchJson('bank/list');
    }

    /**
     * Look up account number (+ 3 Euro fee)
     * @param {string} uuid - Player UUID
     * @returns {Promise<object>}
     */
    lookup(uuid) {
        Validators.validateUuid(uuid, 'uuid');

        return this.apiClient.fetchJson('bank/lookup', {
            uuid
        });
    }

    /**
     * Create a bank transaction
     * @param {string} accountNumber - Source account number
     * @param {number} amount - Transaction amount
     * @param {string} targetAccountNumber - Target account number
     * @param {string} [message] - Optional transaction message
     * @returns {Promise<object>}
     */
    createTransaction(accountNumber, amount, targetAccountNumber, message = null) {
        Validators.validateAccountNumber(accountNumber, 'accountNumber');

        return this.apiClient.fetchJson('bank/transaction', {
            accountNumber,
            amount,
            targetAccountNumber,
            message
        });
    }
}