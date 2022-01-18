import { displayMessage } from "../helpers/helper.js";

class Bank {
    constructor(props) {
        this.props = props;
    }

    getALoan() {
        if (this.props.gotBankLoan) {
            displayMessage(`You may not have two loans at once. The initial loan should be paid back in full`, true);
            return;
        } else {
            let lentMoney = Number(prompt("How much?"));
            let maxLoan = this.props.bankBalance * 2;

            if (lentMoney === 0) {
                displayMessage("Loan amount can't be 0", true);
                return;
            }
            if (lentMoney > maxLoan) {
                displayMessage(`You cannot get a loan more than double of your bank balance. Max loan: ${maxLoan}`, true);
            }
            if (lentMoney <= maxLoan) {
                this.props.bankBalance += lentMoney;
                this.props.loanBalance += lentMoney;
                this.props.gotBankLoan = true;
            } else {
                this.props.gotBankLoan = false;
            }
        }
    }
    repayLoan() {
        if (this.props.workBalance > this.props.loanBalance) {
            this.props.workBalance -= this.props.loanBalance;
            this.props.loanBalance = 0;
            this.props.gotBankLoan = false;

        } else {
            this.props.loanBalance -= this.props.workBalance;
            this.props.workBalance = 0;
        }
        if (this.props.loanBalance === 0) {
            this.props.gotBankLoan = false;
        }
    }
}

export default Bank;