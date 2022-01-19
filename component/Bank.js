import { displayMessage } from "../helpers/helper.js";

class Bank {
    constructor(props) {
        this.props = props;
    }
    /**
     * Method to get a loan.
     * You can only get a loan if you dont already have a loan.
     * The loan can only be twice the amount of what your current bank balance is.
     * The method also checks if you try to take a loan that is less then or equal to 0 and then dismiss
     */
    getALoan() {
        if (this.props.gotBankLoan) {
            displayMessage(`You may not have two loans at once. The initial loan should be paid back in full`, true);
            return;
        } else {
            let lentMoney = Number(prompt("How much?"));
            let maxLoan = this.props.bankBalance * 2;

            if (lentMoney <= 0) {
                displayMessage("Loan amount can't be less then or equal to 0", true);
                return;
            }
            if (lentMoney > maxLoan) {
                displayMessage(`You cannot get a loan more than double of your bank balance. Max loan: ${maxLoan}`, true);
                return;
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

    /**
     * Method to repay the loan instantaneous if you have sufficient work balance
     */
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