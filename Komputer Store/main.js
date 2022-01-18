import DataController from "./DataController.js";
import Work from "./Work.js";
import Bank from "./Bank.js";

const dataController = new DataController();
const work = new Work(dataController);
const bank = new Bank(dataController);

const getWorkButtonId = document.querySelector("[id=work-button]");
const getPaymentId = document.querySelector("[id=payment]");
const getTransferToBankButtonId = document.querySelector("[id=transfer-money-button]");
const getBankBalanceId = document.querySelector("[id=bank-balance]");
const getLoanBalance = document.querySelector("[id=loan-balance]");
const getALoanButtonId = document.querySelector("[id=get-loan-button]");
const getRepayLoanButtonId = document.querySelector("[id=repay-loan-button]");





getWorkButtonId.addEventListener("click", () => {
    work.work();
    getPaymentId.innerHTML = `${dataController.workBalance} kr`;
});

getTransferToBankButtonId.addEventListener("click", () => {
    if (dataController.workBalance === 0) {
        return;
    }
    work.transferMoney();
    getPaymentId.innerHTML = `${dataController.workBalance} kr`;
    getBankBalanceId.innerHTML = `${dataController.bankBalance} kr`;
    getLoanBalance.innerHTML = `${dataController.loanBalance} kr`;
});

getALoanButtonId.addEventListener("click", () => {
    bank.getALoan();
    getBankBalanceId.innerHTML = `${dataController.bankBalance}kr`;
    getLoanBalance.innerHTML = `${dataController.loanBalance}kr`;
});

getRepayLoanButtonId.addEventListener("click", () => {
    if (dataController.loanBalance === 0) {
        return;
    }
    bank.repayLoan();
    getPaymentId.innerHTML = `${dataController.workBalance}kr`;
    getLoanBalance.innerHTML = `${dataController.loanBalance}kr`;
});