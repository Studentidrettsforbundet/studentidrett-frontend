import React from 'react';
import { BASE_URL, CLUB } from '../../constants';
import { UrlBuilderSimpleSearch } from '../../services/urlBuilders';

describe('Simple search', () => {
    test('Normalization and normal text', () => {
        const case1 = 'Football';
        const answer = BASE_URL + '/clubs/' + case1;
        expect(UrlBuilderSimpleSearch(CLUB, case1)).toBe(answer);
    });

    test('Normalization and long text', () => {
        const case1 = 'Football lag i Trondheim';
        const answer = BASE_URL + '/clubs/' + 'Football%20lag%20i%20Trondheim';
        expect(UrlBuilderSimpleSearch(CLUB, case1)).toBe(answer);
    });
});
