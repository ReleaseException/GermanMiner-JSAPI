export class ApiClient {
    /**
     * Create a new API client
     * @param {string} apiKey - Your GermanMiner API key
     * @param {string} baseUrl - API base URL
     */
    constructor(apiKey, baseUrl) {
        this.apiKey = apiKey;
        this.baseUrl = baseUrl;
    }

    /**
     * Parse JSON string
     * @param {string} json - JSON string to parse
     * @returns {object|false} Parsed JSON or false on error
     * @private
     */
    parseJson(json) {
        try {
            const data = JSON.parse(json);
            return data || false;
        } catch (e) {
            return false;
        }
    }

    /**
     * Fetch data from API
     * @param {string} path - API endpoint path
     * @param {object} [parameters] - Query parameters
     * @returns {Promise<string>} API response
     * @private
     */
    async fetch(path, parameters = null) {
        const url = new URL(this.baseUrl + path);
        url.searchParams.append('key', this.apiKey);

        if (parameters) {
            Object.entries(parameters).forEach(([key, value]) => {
                if (value !== null) {
                    url.searchParams.append(key, value);
                }
            });
        }

        try {
            const response = await fetch(url.toString());
            return await response.text();
        } catch (error) {
            throw new Error(`Network error: ${error.message}`);
        }
    }

    /**
     * Fetch and parse JSON from API
     * @param {string} path - API endpoint path
     * @param {object} [parameters] - Query parameters
     * @returns {Promise<object>} Parsed JSON response
     */
    async fetchJson(path, parameters = null) {
        try {
            const response = await this.fetch(path, parameters);

            if (response) {
                const json = this.parseJson(response);

                if (json && json.success !== undefined) {
                    if (!json.success) {
                        throw new Error(`API returned error: ${json.error}`);
                    }

                    return json.data !== undefined ? json.data : true;
                } else {
                    throw new Error('API returned invalid JSON.');
                }
            }

            throw new Error('API returned nothing.');
        } catch (error) {
            throw error;
        }
    }
}