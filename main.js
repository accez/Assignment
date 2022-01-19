import DataController from "./component/DataController.js";
import Work from "./component/Work.js";
import Bank from "./component/Bank.js";
import KomputerStore from "./component/KomputerStore.js";
import { updateDOMBalance } from "./domManipulation.js";

const dataController = new DataController();
const work = new Work(dataController);
const bank = new Bank(dataController);
const store = new KomputerStore(dataController);

store.getFetchedComputerData();

const getWorkButtonId = document.querySelector("[id=work-button]");
const getTransferToBankButtonId = document.querySelector("[id=transfer-money-button]");
const getALoanButtonId = document.querySelector("[id=get-loan-button]");
const getRepayLoanButtonId = document.querySelector("[id=repay-loan-button]");
const getBuyButton = document.querySelector("[id=buy-button]");

// Event listeners
getWorkButtonId.addEventListener("click", () => {
    work.work();
    updateDOMBalance(dataController);
});

getTransferToBankButtonId.addEventListener("click", () => {
    if (dataController.workBalance === 0) {
        return;
    }
    work.transferMoney();
    updateDOMBalance(dataController);
});

getALoanButtonId.addEventListener("click", () => {
    bank.getALoan();
    updateDOMBalance(dataController);

});

getRepayLoanButtonId.addEventListener("click", () => {
    if (dataController.loanBalance === 0) {
        return;
    }
    bank.repayLoan();
    updateDOMBalance(dataController);

});

getBuyButton.addEventListener("click", () => {
    store.buyComputer();
});