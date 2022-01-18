export function displayMessage(text, errorMessage) {
    const getMessageId = document.querySelector("[id=message]");

    errorMessage ? getMessageId.setAttribute("class", "error-message") : getMessageId.setAttribute("id", "completed-purchase");
    getMessageId.innerHTML = text;
}