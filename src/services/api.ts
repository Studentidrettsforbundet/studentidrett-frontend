import { cardType } from '../constants';
import { urlBuilderSimpleSearch } from './urlBuilders';

export const simpleSearch = async (queryUrl: string, cardType: cardType) => {
    try {
        const res = await fetch(urlBuilderSimpleSearch(cardType, queryUrl), {
            method: 'GET',
            headers: new Headers({
                Accept: 'application/json',
            }),
        });
        if (checkForErrorCodes(res)) {
            return {
                count: 0,
                next: null,
                previous: null,
                results: [],
            };
        } else {
            return res.json();
        }
    } catch (error) {
        return 'Connection error';
    }
};

const checkForErrorCodes = (result: any): boolean => {
    return result.status !== 200;
};
