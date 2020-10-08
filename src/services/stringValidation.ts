/**
 * This method performs all input validation: normalization, whitelisting, and URI encoding
 * @param inputString a dangerous string
 * @returns a "safe" string encoded on URI format
 */
export const makeInputSafe = (inputString: string, maxLength: number): string => {
    const normalized = stringNormalization(inputString);
    const trimmed = trimWhiteSpaces(normalized);
    const encoded = urlEncoding(trimmed);
    const lowercase = encoded.toLocaleLowerCase();

    return lowercase;
};

/**
 * This method checks if a string is within a certain length, and if it satisfies the regex.
 * @param inputString
 * @param maxLength
 */
export const validateString = (inputString: string, maxLength: number): [boolean, string] => {
    const lengthCheck = inputString.length <= maxLength;
    const regexCheck = stringWhitelisting(inputString);
    var feedbackString = '';

    if (!lengthCheck) {
        feedbackString += 'Too Long ';
    }

    if (!regexCheck) {
        feedbackString += 'Illegal Characters';
    }

    return [lengthCheck && regexCheck, feedbackString];
};

/**
 * This method removes leading and trailing whitespaces, and removes duplicate whitespaces.
 * @param inputString string with potentially many whitespaces
 * @returns string with no leading or trailing whitespaces, and only one following whitespace
 */
export const trimWhiteSpaces = (inputString: string): string => {
    const removeExternalSpaces = inputString.trim();
    return removeExternalSpaces.replace(/\s\s+/g, ' ');
};

/**
 * This method performs normalization on the input string into NFC.
 * @param inputString
 */
export const stringNormalization = (inputString: string): string => {
    return inputString.normalize('NFC');
};

/**
 * This method whitelists the inputstring. It allows all letters A-Å, Ä, Ö, and(, . - _ ')
 * @param inputString
 * @returns a boolean indicating if the string passed the whitelisting
 */
export const stringWhitelisting = (inputString: string): boolean => {
    // prettier-ignore
    var regex = new RegExp("^[a-zA-Z0-9&ÆæØøÅåÄäÖö_.,'\\-\\ ]+$");

    return regex.test(inputString);
};

/**
 * This method returns an URIComponent encoded string, which is safe for GET/PUT/POST request.
 * @param inputString The user inserted data
 * @returns URI safe encoding
 */
export const urlEncoding = (inputString: string): string => {
    return encodeURIComponent(inputString);
};
