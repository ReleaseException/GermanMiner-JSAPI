export class Validators {
    /**
     * Validate UUID format
     * @param {string} uuid - UUID to validate
     * @param {string} parameterName - Parameter name for error message
     * @throws {Error} If UUID is invalid
     */
    static validateUuid(uuid, parameterName) {
        if (uuid.replace(/-/g, '').length !== 32) {
            throw new Error(`API returned error: Ungültiger Parameter: ${parameterName}`);
        }
    }

    /**
     * Validate GMLink code format
     * @param {string} code - GMLink code to validate
     * @param {string} parameterName - Parameter name for error message
     * @throws {Error} If GMLink code is invalid
     */
    static validateGmlinkCode(code, parameterName) {
        const split = code.split('-');
        if (code.length !== 11 ||
            split.length !== 3 ||
            isNaN(split[0]) ||
            isNaN(split[1]) ||
            isNaN(split[2]) ||
            parseInt(split[0]) !== ((parseInt(split[1]) + parseInt(split[2])) % 1000)) {
            throw new Error(`API returned error: Ungültiger Parameter: ${parameterName} (Der GMLink-Code ist ungültig)`);
        }
    }

    /**
     * Validate account number format
     * @param {string} accountNumber - Account number to validate
     * @param {string} parameterName - Parameter name for error message
     * @throws {Error} If account number is invalid
     */
    static validateAccountNumber(accountNumber, parameterName) {
        if (accountNumber.length !== 11 || accountNumber.toUpperCase().substring(0, 3) !== 'DEF') {
            throw new Error(`API returned error: Ungültiger Parameter: ${parameterName}`);
        }
    }
}