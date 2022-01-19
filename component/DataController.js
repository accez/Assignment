class DataController {
    /**
     * This class holds all data.
     * 
     * @param {number} workBalance The balance you get when working.
     * @param {number} bankBalance Your bank balance.
     * @param {number} loanBalance The amount of loan balance.
     */
    constructor(workBalance = 0, bankBalance = 0, loanBalance = 0) {
        this.workBalance = workBalance;
        this.bankBalance = bankBalance;
        this.loanBalance = loanBalance;
        this.gotBankLoan = false;
        this.apiUrl = "https://noroff-komputer-store-api.herokuapp.com/";
        this.computerUrl = "computers";
    }
}

export default DataController;