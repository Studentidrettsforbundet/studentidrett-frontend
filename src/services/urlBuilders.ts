import { BASE_URL, cardType } from '../constants';
import { makeInputSafe } from './stringValidation';

const MAXLENGTH_SEARCH = 50;

export const UrlBuilderSimpleSearch = (type: cardType, searchString: string): string => {
    const safeString = makeInputSafe(searchString, MAXLENGTH_SEARCH);
    return BASE_URL + '/' + type + '/' + safeString;
};
