import {GermanMinerAPI} from "./germanminerapi";

export class GermanMinerAPIBuilder {
    constructor() {
        this.apiKey = null;
    }

    /**
     * Set the API key
     * @param {string} apiKey - Your GermanMiner API key
     * @returns {GermanMinerAPIBuilder} Builder instance for chaining
     */
    withApiKey(apiKey) {
        this.apiKey = apiKey;
        return this;
    }

    /**
     * Build the GermanMinerAPI instance
     * @returns {GermanMinerAPI} GermanMinerAPI instance
     */
    build() {
        return new GermanMinerAPI(this.apiKey);
    }
}