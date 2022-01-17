class DataController {
    constructor(workBalance = 0, bankBalance = 0, loanBalance = 0) {
        this.workBalance = workBalance;
        this.bankBalance = bankBalance;
        this.loanBalance = loanBalance;
        this.gotBankLoan = false;
    }
}

export default DataController;