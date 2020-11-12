/**
 * This method performs all input validation: normalization, whitelisting, and URI encoding
 * @param inputString a dangerous string
 * @returns a "safe" string encoded on URI format
 */
export const makeInputSafe = (inputString: string): string => {
    const normalized = stringNormalization(inputString);
    const trimmed = trimWhiteSpaces(normalized);
    const encoded = urlEncoding(trimmed);
    return encoded;
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
 * This method returns an URIComponent encoded string, which is safe for GET/PUT/POST request.
 * @param inputString The user inserted data
 * @returns URI safe encoding
 */
export const urlEncoding = (inputString: string): string => {
    return encodeURIComponent(inputString);
};
