import { BASE_URL, cardType } from '../constants';
import { makeInputSafe } from './stringValidation';

const MAXLENGTH_SEARCH = 50;

export const urlBuilderSimpleSearch = (cardType: cardType, searchString: string): string => {
    const safeString = makeInputSafe(searchString, MAXLENGTH_SEARCH);
    return BASE_URL + '/' + cardType + '/' + safeString;
};

export const urlBuilderFetchData = (cardType: cardType): string => {
    const safeString = makeInputSafe('', MAXLENGTH_SEARCH);
    return BASE_URL + '/' + cardType + '/' + safeString;
};
