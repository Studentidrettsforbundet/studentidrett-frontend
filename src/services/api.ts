import { CLUB, cardType } from '../constants';
import { UrlBuilderSimpleSearch } from './urlBuilders';

export const simpleSearch = (queryUrl: string, cardType: cardType) => {
    return fetch(UrlBuilderSimpleSearch(cardType, queryUrl), {
        method: 'GET',
        headers: new Headers({
            Accept: 'application/json',
        }),
    })
        .then((res) => res.json())
        .then((result) => {
            return result;
        });
};
