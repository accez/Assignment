import { fixImageError } from "./helper.js";

export const updateDOMBalance = ({ ...props }) => {
    const getPaymentId = document.querySelector("[id=payment]");
    const getBankBalanceId = document.querySelector("[id=bank-balance]");
    const getLoanBalance = document.querySelector("[id=loan-balance]");

    getPaymentId.innerHTML = `${props.workBalance} kr`;
    getBankBalanceId.innerHTML = `${props.bankBalance} kr`;
    getLoanBalance.innerHTML = `${props.loanBalance} kr`;
};

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

export const addToSelectElement = (title, id) => {
    const getSelectId = document.querySelector("[id=computer-list]");
    let option = document.createElement("option");

    option.text = title;
    option.value = id;
    getSelectId.add(option);
};
