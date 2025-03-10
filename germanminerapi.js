
import {WorldService} from "./services/worldservice";
import {ProtectionService} from "./services/protectionservice";
import {BankService} from "./services/bankservice";
import {BizService} from "./services/bizservice";
import {ApiClient} from "./GermanMinerApiClient";
import {CompanyService} from "./services/companyservice";
import {ContractService} from "./services/contractservice";
import {FractionService} from "./services/fractionservice";
import {GMLinkService} from "./services/linkservice";
import {PlayerService} from "./services/playerservice";

export class GermanMinerAPI {
    /**
     * Create a new GermanMinerAPI client
     * @param {string} apiKey - Your GermanMiner API key
     */
    constructor(apiKey) {
        if (!apiKey) {
            throw new Error('API key is required');
        }

        const baseUrl = 'https://api.germanminer.de/v2/';
        this.apiClient = new ApiClient(apiKey, baseUrl);

        // Initialize all services
        this.bank = new BankService(this.apiClient);
        this.biz = new BizService(this.apiClient);
        this.company = new CompanyService(this.apiClient);
        this.contract = new ContractService(this.apiClient);
        this.fraction = new FractionService(this.apiClient);
        this.gmlink = new GMLinkService(this.apiClient);
        this.player = new PlayerService(this.apiClient);
        this.protection = new ProtectionService(this.apiClient);
        this.world = new WorldService(this.apiClient);
    }

    /**
     * API information
     * Returns level and remaining requests
     * @returns {Promise<object>}
     */
    getApiInfo() {
        return this.apiClient.fetchJson('api/info');
    }
}
