import { displayMessage } from "../helpers/helper.js";
import { updateDOMBalance, addComputerInformationToBottomCard, addToSelectElement } from "../domManipulation.js";

class KomputerStore {
    constructor(props) {
        this.props = props;
    }
    async fetchApi(url, name) {
        try {
            const response = await fetch(`${url}${name}`);
            const computers = await response.json();
            return computers;

        } catch (error) {
            console.error(error);
        }
    }

    async getFetchedComputerData() {
        let computers = await this.fetchApi(this.props.apiUrl, this.props.computerUrl);
        const getSelectId = document.querySelector("[id=computer-list]");

        addComputerInformationToBottomCard(computers[0], this.props.apiUrl);
        computers.forEach(computer => {
            addToSelectElement(computer.title, computer.id);
            getSelectId.addEventListener("change", (event) => {
                let value = Number(event.target.value);
                if (computer.id === value) {
                    addComputerInformationToBottomCard(computer, this.props.apiUrl);
                }
            });
        });
    }

    buyComputer() {
        const getTitle = document.querySelector("[id=bottom-title]");
        const getPrice = document.querySelector("[id=price]");

        let removeCurrency = getPrice.innerHTML.match(/\d/g).join("");
        let price = Number(removeCurrency);

        if (this.props.bankBalance >= price) {
            this.props.bankBalance -= price;
            updateDOMBalance(this.props);
            displayMessage(`Congratulation your purchase of ${getTitle.innerHTML} was successful!`, false);
        } else {
            displayMessage("Insufficient funds", true);
        }
    }
}

export default KomputerStore;