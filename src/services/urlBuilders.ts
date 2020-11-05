import { BASE_URL, cardType } from '../constants';
import { makeInputSafe } from './stringValidation';

const MAXLENGTH_SEARCH = 50;

export const urlBuilderSimpleSearch = (searchString: string = ''): string => {
    let safeString;
    const newstr = searchString.split('/');

    if (newstr.length > 1) {
        safeString = newstr[0] + '/' + makeInputSafe(newstr[1], MAXLENGTH_SEARCH);
    } else {
        safeString = makeInputSafe(searchString, MAXLENGTH_SEARCH);
    }

    return BASE_URL + '/search/?q=' + safeString;
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

export const urlBuilderGetQuestions = (): string => {
    return BASE_URL + '/questions';
};

export const urlBuilderPostQuestions = (): string => {
    return BASE_URL + '/questionnaire/';
};

export const urlBuilderPostInterest = (): string => {
    return BASE_URL + '/interest/';
};
