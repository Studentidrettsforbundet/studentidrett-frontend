import { cardType } from '../constants';
import { resultsInterface } from '../interfaces';
import { UrlBuilderSimpleSearch } from './urlBuilders';

export const simpleSearch = (queryUrl: string, cardType: cardType) => {
    return fetch(UrlBuilderSimpleSearch(cardType, queryUrl), {
        method: 'GET',
        headers: new Headers({
            Accept: 'application/json',
        }),
    })
        .then((res) => {
            if (checkForErrorCodes(res)) {
                return {
                    count: 0,
                    next: null,
                    previous: null,
                    results: []
                }
            }
            else {
                return res.json();
            }
        })

        .catch(error => "Connection error");

};


const checkForErrorCodes = (result: any): boolean => {
    return result.status !== 200;
};