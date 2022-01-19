import { fixImageError } from "./helpers/helper.js";

/**
 * Updates the value of all balances
 * 
 * @param {Object} props Takes the data from dataController
 */
export const updateDOMBalance = ({ ...props }) => {
    const getPaymentId = document.querySelector("[id=payment]");
    const getBankBalanceId = document.querySelector("[id=bank-balance]");
    const getLoanBalance = document.querySelector("[id=loan-balance]");

    getPaymentId.innerHTML = `${props.workBalance} kr`;
    getBankBalanceId.innerHTML = `${props.bankBalance} kr`;
    getLoanBalance.innerHTML = `${props.loanBalance} kr`;
};

/**
 * Updates the bottom card to display the computer information
 * 
 * @param {Array} computer The computers array
 * @param {*} apiURL The url for the API
 */
export const addComputerInformationToBottomCard = (computer, apiURL) => {
    const getImageID = document.querySelector("[id=image]");
    const getTitle = document.querySelector("[id=bottom-title]");
    const getParagraph = document.querySelector("[id=bottom-paragraph]");
    const getPrice = document.querySelector("[id=price]");
    const getUl = document.querySelector("ul");

    if (computer.image === "assets/images/5.jpg") {
        getImageID.src = `${apiURL}${fixImageError(computer.image, ".png")}`;
    } else {
        getImageID.src = `${apiURL}${computer.image}`;

    }
    getTitle.innerHTML = computer.title;
    getParagraph.innerHTML = computer.description;
    getPrice.innerHTML = `${computer.price} kr`;
    getUl.innerHTML = "";
    computer.specs.forEach(spec => {
        let li = document.createElement("li");
        li.innerText = spec;
        getUl.appendChild(li);
    });
};

/**
 * Adds a title and id to the <option> tag inside the <select> element.
 * 
 * @param {string} title The title of the computer
 * @param {number} id The ID of the computer
 */
export const addToSelectElement = (title, id) => {
    const getSelectId = document.querySelector("[id=computer-list]");
    let option = document.createElement("option");

    option.text = title;
    option.value = id;
    getSelectId.add(option);
};
