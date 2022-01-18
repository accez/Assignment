export function displayMessage(text, errorMessage) {
    const getMessageId = document.querySelector("[id=message]");
    errorMessage ? getMessageId.setAttribute("class", "error-message") : getMessageId.setAttribute("class", "completed-purchase");
    getMessageId.innerHTML = text;
}

export function fixImageError(image, format) {
    let removeJPG = image.split(".");
    removeJPG.pop();
    removeJPG.push(format);
    let correctImageUrl = removeJPG.join("");
    return correctImageUrl;
}