import DataController from "./DataController.js";
import Work from "./Work.js";

const dataController = new DataController();
const work = new Work(dataController);

const getWorkButtonId = document.querySelector("[id=work-button]");
const getPaymentId = document.querySelector("[id=payment]");
const getTransferToBankButtonId = document.querySelector("[id=transfer-money-button]");
const getBankBalanceId = document.querySelector("[id=bank-balance]");
const getLoanBalance = document.querySelector("[id=loan-balance]");





getWorkButtonId.addEventListener("click", () => {
    work.work();
    console.log(dataController.workBalance);
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