import React from 'react';
import { BASE_URL, CLUB } from '../constants';
import { urlBuilderSimpleSearch } from '../services/urlBuilders';

describe('Simple search', () => {
    test('Normalization and normal text', () => {
        const case1 = 'Football';
        const answer = BASE_URL + '/search/?q=clubs/football';
        expect(urlBuilderSimpleSearch(CLUB, case1)).toBe(answer);
    });

    test('Normalization and long text', () => {
        const case1 = 'Football lag i Trondheim';
        const answer = BASE_URL + '/search/?q=clubs/football%20lag%20i%20trondheim';
        expect(urlBuilderSimpleSearch(CLUB, case1)).toBe(answer);
    });
});
