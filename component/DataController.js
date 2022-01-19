class DataController {
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