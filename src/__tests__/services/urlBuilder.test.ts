import React from 'react';
import { BASE_URL, CLUB } from '../../constants';
import { urlBuilderSimpleSearch } from '../../services/urlBuilders';

describe('Simple search', () => {
    test('Should normalization a single word', () => {
        const case1 = 'Football';
        const answer = BASE_URL + '/clubs/' + case1;
        expect(urlBuilderSimpleSearch(CLUB, case1)).toBe(answer);
    });

    test('Should normalization a sentence', () => {
        const case1 = 'Football lag i Trondheim';
        const answer = BASE_URL + '/clubs/' + 'Football%20lag%20i%20Trondheim';
        expect(urlBuilderSimpleSearch(CLUB, case1)).toBe(answer);
    });
});
