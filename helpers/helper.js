/**
 * Displays a message with the given string 
 * 
 * @param {string} text The string you want the message to display.
 * @param {boolean} errorMessage True if the message is a error message. 
 */
export function displayMessage(text, errorMessage) {
    const getMessageId = document.querySelector("[id=message]");
    errorMessage ? getMessageId.setAttribute("class", "error-message") : getMessageId.setAttribute("class", "completed-purchase");
    getMessageId.innerHTML = text;
}

/**
 * This function change the format of a image.
 * 
 * @param {string} image The source of the image.
 * @param {string} format The image file format you want to change e.g .png.
 * @returns {string} The changed image source.
 */
export function fixImageError(image, format) {
    let removeJPG = image.split(".");
    removeJPG.pop();
    removeJPG.push(format);
    let correctImageUrl = removeJPG.join("");
    return correctImageUrl;
}
