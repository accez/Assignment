class Work {
    constructor(props) {
        this.props = props;
    }

    work() {
        this.props.workBalance += 100;
    }

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