import { BASE_URL, cardType } from '../constants';
import { makeInputSafe } from './stringValidation';

const MAXLENGTH_SEARCH = 50;

export const urlBuilderSimpleSearch = (searchString: string, cardType?: cardType): string => {
    const safeString = makeInputSafe(searchString, MAXLENGTH_SEARCH);

    if (!cardType) {
        return BASE_URL + '/search/?q=' + safeString;
    } else if (safeString === '') {
        return urlBuilderFetchData(cardType);
    } else {
        return BASE_URL + '/search/?q=' + cardType + '/' + safeString;
    }
};

interface filterCards {
    cardType: string;
    id_or_name: string;
}

export const urlBuilderFilterData = (cardType: cardType, filterParams: filterCards[]): string => {
    let output = BASE_URL + '/' + cardType + '/';
    if (filterParams.length > 0) {
        output += '?';
        for (const fil of filterParams) {
            output += `${fil.cardType}=${fil.id_or_name}`;
        }
        output += '&';
    }
    return output;
};

export const urlBuilderFetchData = (cardType: cardType): string => {
    return BASE_URL + '/' + cardType + '/';
};

export const urlBuilderFetchDetail = (cardType: cardType, id: string): string => {
    return BASE_URL + '/' + cardType + '/' + id + '/';
};
