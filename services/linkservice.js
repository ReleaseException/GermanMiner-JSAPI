export class GMLinkService {
    /**
     * @param {ApiClient} apiClient - The API client instance
     */
    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    /**
     * GM-Link (DEPRECATED)
     * To verify a user, you need the UUID, GMLink code and hash. The GMLink code is obtained by the player entering /gmlink in chat. The hash must be an MD5 hash of the player's IP address.
     * @param {string} code - GMLink code
     * @param {string} hash - MD5 hash of player's IP
     * @param {string} uuid - Player UUID
     * @returns {Promise<object>}
     */
    verify(code, hash, uuid) {
        Validators.validateGmlinkCode(code, 'code');
        Validators.validateUuid(uuid, 'uuid');

        return this.apiClient.fetchJson('gmlink', {
            code,
            hash,
            uuid
        });
    }

    /**
     * GM-Link 2 - Request
     * Send verification request to player's chat. The GMLink code is obtained by the player entering /gmlink in chat.
     * @param {string} appName - Application name
     * @param {string} code - GMLink code
     * @returns {Promise<object>}
     */
    request(appName, code) {
        return this.apiClient.fetchJson('gmlink2/request', {
            appName,
            code
        });
    }

    /**
     * GM-Link 2 - Validate
     * Once the player confirms the request in chat, you can send a request to this endpoint to find out their player name and UUID, which you can use for authentication.
     * @param {string} code - GMLink code
     * @returns {Promise<object>}
     */
    validate(code) {
        return this.apiClient.fetchJson('gmlink2/validate', {
            code
        });
    }
}