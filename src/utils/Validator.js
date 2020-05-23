export function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
}

/**
 * 
 * @param {Array} messages — Validate that text to use is non-empty Array / non-empty String
 * @throws {Error} — Calling object catches this
 */
export function validateMessages(messages) {
    //! Messages must have some text to use in the canvas: non-empty Array / non-empty String
    if (typeof messages !== "string" && !Array.isArray(messages)) throw new Error('Enter a string or array.');
    if (typeof messages === 'string' && messages.length <= 0) throw new Error('Enter a message with 0 or more characters.');
    else if (Array.isArray(messages) && messages.length <= 0) throw new Error('Enter a valid list.');
}

/**
 * Replaces any image path if it is an image
 * 
 * @param {Array}   messages — List of messages
 * @returns {Array} A mix of images / strings
 */
export function replaceImages(messages) {
    for (let i = 0; i < messages.length; i++) {
        if (validURL(messages[i])) {
            let img = new Image();
            img.src = messages[i];
            if (img.height != 0) {
                messages[i] = img;
            }
        }
    }
    return messages;
}