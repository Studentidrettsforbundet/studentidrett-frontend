import { BASE_URL, cardType } from '../constants';
import { makeInputSafe } from './stringValidation';

const MAXLENGTH_SEARCH = 50;

export const urlBuilderSimpleSearch = (cardType: cardType, searchString: string): string => {
    const safeString = makeInputSafe(searchString, MAXLENGTH_SEARCH);

    if (safeString === '') {
        return urlBuilderFetchData(cardType);
    } else {
        return BASE_URL + '/search/?q=' + cardType + '/' + safeString;
    }
};

export const urlBuilderFetchData = (cardType: cardType): string => {
    return BASE_URL + '/' + cardType + '/';
};
