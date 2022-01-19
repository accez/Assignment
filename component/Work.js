class Work {
    constructor(props) {
        this.props = props;
    }

    /**
     * Adds 100 to workBalance
     */
    work() {
        this.props.workBalance += 100;
    }

    /**
     * Transfer the money to bank
     * The method transfers money from workBalance to bankBalance.
     * If you have a loan it will deduct 10% of the transfer towards the loan
     */
    transferMoney() {
        let deduction = this.props.workBalance * 0.1;
        let remainingAfterDeduction = this.props.workBalance - deduction;
        let remainingLoan = this.props.workBalance - this.props.loanBalance;

        if (this.props.gotBankLoan && deduction > this.props.loanBalance) {
            this.props.bankBalance += remainingLoan;
            this.props.loanBalance = 0;
            this.props.workBalance = 0;
        } else if (this.props.gotBankLoan) {
            this.props.loanBalance -= deduction;
            this.props.bankBalance += remainingAfterDeduction;
            this.props.workBalance = 0;
        } else {
            this.props.bankBalance += this.props.workBalance;
            this.props.workBalance = 0;
        }
        if (this.props.loanBalance === 0) {
            this.props.gotBankLoan = false;
        }
    }
}

export default Work;