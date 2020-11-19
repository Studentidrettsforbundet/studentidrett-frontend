export const makeInputSafe = (inputString: string): string => {
    const normalized = stringNormalization(inputString);
    const trimmed = trimWhiteSpaces(normalized);
    const encoded = urlEncoding(trimmed);
    return encoded;
};

export const trimWhiteSpaces = (inputString: string): string => {
    const removeExternalSpaces = inputString.trim();
    return removeExternalSpaces.replace(/\s\s+/g, ' ');
};

export const stringNormalization = (inputString: string): string => {
    return inputString.normalize('NFC');
};

export const urlEncoding = (inputString: string): string => {
    return encodeURIComponent(inputString);
};
