let workBalance = 0;
let bankBalance = 0;
let loanBalance = 0;
let gotBankLoan = false;
const apiUrl = "https://noroff-komputer-store-api.herokuapp.com/";
const computerUrl = "computers";

const getWorkButtonId = document.querySelector("[id=workBtn]");
const getPaymentId = document.querySelector("[id=payment]");
const getBankBalanceId = document.querySelector("[id=bankBalance]");
const getTransferToBankButtonId = document.querySelector("[id=transferMoney]");
const getALoanButton = document.querySelector("[id=getALoanButton]");
const getMessageId = document.querySelector("[id=message]");
const getLoanBalance = document.querySelector("[id=loanBalance]");
const getRepayLoanButtonId = document.querySelector("[id=repayBtn]");
const getSelectId = document.querySelector("[id=computerList]");
const getBuyButton = document.querySelector("[id=buy-button]");
const getImageID = document.querySelector("[id=image]");
const getTitle = document.querySelector("[id=bottom-title]");
const getParagraph = document.querySelector("[id=bottom-paragraph]");
const getPrice = document.querySelector("[id=price]");
const getUl = document.querySelector("ul");

//Function for fetching data
async function fetchApi(url, name) {
    try {
        const response = await fetch(`${url}${name}`);
        const computers = await response.json();
        return computers;

    } catch (error) {
        console.error(error);
    }
}

async function getFetchedComputerData() {
    let computers = await fetchApi(apiUrl, computerUrl);
    addComputerInformationToBottomCard(computers[0]);
    computers.forEach(computer => {
        addToSelectElement(computer.title, computer.id);
        getSelectId.addEventListener("change", (event) => {
            let value = Number(event.target.value);
            if (computer.id === value) {
                addComputerInformationToBottomCard(computer);
            }
        });
    });
}

getFetchedComputerData();


function addComputerInformationToBottomCard(computer) {
    if (computer.image === "assets/images/5.jpg") {
        let removeJPG = computer.image.split(".");
        removeJPG.pop();
        removeJPG.push(".png");
        let correctImageUrl = removeJPG.join("");
        getImageID.src = `${apiUrl}${correctImageUrl}`;
    } else {
        getImageID.src = `${apiUrl}${computer.image}`;

    }
    getTitle.innerHTML = computer.title;
    getParagraph.innerHTML = computer.description;
    getPrice.innerHTML = computer.price;
    getUl.innerHTML = "";
    computer.specs.forEach(spec => {
        let li = document.createElement("li");
        li.innerText = spec;
        getUl.appendChild(li);
    });
}

function addToSelectElement(title, id) {
    let option = document.createElement("option");
    option.text = title;
    option.value = id;
    getSelectId.add(option);
}


function work() {
    workBalance += 100;
}

function transferMoney() {
    let deduction = workBalance * 0.1;
    let remainingAfterDeduction = workBalance - deduction;
    let remainingLoan = workBalance - loanBalance;

    if (gotBankLoan && deduction > loanBalance) {
        bankBalance += remainingLoan;
        loanBalance = 0;
        workBalance = 0;
    } else if (gotBankLoan) {
        loanBalance -= deduction;
        bankBalance += remainingAfterDeduction;
        workBalance = 0;
    } else {
        bankBalance += workBalance;
        workBalance = 0;
    }
    if (loanBalance === 0) {
        gotBankLoan = false;
    }
}


function getALoan() {
    let lendMoney = Number(prompt("How much?"));
    let maxLoan = bankBalance * 2;

    if (lendMoney === 0) {
        displayMessage("Loan amount can't be 0");
        return;
    }

    if (lendMoney > maxLoan) {
        displayMessage(`You cannot get a loan more than double of your bank balance. Max loan: ${maxLoan}`);
    }

    if (lendMoney <= maxLoan) {
        bankBalance += lendMoney;
        loanBalance += lendMoney;
        getMessageId.innerHTML = "";
        gotBankLoan = true;
    } else {
        gotBankLoan = false;
    }
}

function repayLoan() {
    if (workBalance > loanBalance) {
        workBalance -= loanBalance;
        loanBalance = 0;
        gotBankLoan = false;

    } else {
        loanBalance -= workBalance;
        workBalance = 0;
    }
    if (loanBalance === 0) {
        gotBankLoan = false;
    }
}

function buyComputer() {
    let price = Number(getPrice.innerHTML);
    if (bankBalance >= price) {
        bankBalance -= price;
        getBankBalanceId.innerHTML = `${bankBalance} kr`;
        displayMessage(`Congratulation your purchase of ${getTitle.innerHTML} was successful!`);
    } else {
        displayMessage("Insufficient funds");
    }
}

function displayMessage(text) {
    getMessageId.innerHTML = text;
}

getWorkButtonId.addEventListener("click", () => {
    work();
    getPaymentId.innerHTML = `${workBalance} kr`;
});

getTransferToBankButtonId.addEventListener("click", () => {
    if (workBalance === 0) {
        return;
    }
    transferMoney();
    getPaymentId.innerHTML = `${workBalance} kr`;
    getBankBalanceId.innerHTML = `${bankBalance} kr`;
    getLoanBalance.innerHTML = `${loanBalance} kr`;
});

getALoanButton.addEventListener("click", () => {
    if (gotBankLoan) {
        displayMessage(`You may not have two loans at once. The initial loan should be paid back in full`);
        return;
    }
    if (!gotBankLoan) {
        getALoan();
        getBankBalanceId.innerHTML = `${bankBalance}kr`;
        getLoanBalance.innerHTML = `${loanBalance}kr`;
    }
});


getRepayLoanButtonId.addEventListener("click", () => {
    if (loanBalance === 0) {
        return;
    }
    repayLoan();
    getPaymentId.innerHTML = `${workBalance}kr`;
    getLoanBalance.innerHTML = `${loanBalance}kr`;
});

getBuyButton.addEventListener("click", () => {
    buyComputer();
});