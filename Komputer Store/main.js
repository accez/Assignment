import DataController from "./DataController.js";
import Work from "./Work.js";

const dataController = new DataController();
const work = new Work(dataController);

const getWorkButtonId = document.querySelector("[id=work-button]");
const getPaymentId = document.querySelector("[id=payment]");

getWorkButtonId.addEventListener("click", () => {
    work.work();
    getPaymentId.innerHTML = `${dataController.workBalance} kr`;
});