import React from 'react';
import { BASE_URL, CITY, CLUB, GROUP, REGION, SPORT, TEAM } from '../../constants';
import {
    urlBuilderFetchData,
    urlBuilderGetQuestions,
    urlBuilderPostQuestions,
    urlBuilderSimpleSearch,
} from '../../services/urlBuilders';

describe('urlBuilderSimpleSearch', () => {
    test('Should normalization a single word', () => {
        const case1 = 'clubs/Football';
        const answer = BASE_URL + '/search/?q=' + case1;
        expect(urlBuilderSimpleSearch(case1)).toBe(answer);
    });

    test('Should normalization a sentence', () => {
        const case1 = 'clubs/Football lag i Trondheim';
        const answer = BASE_URL + '/search/?q=clubs/' + 'Football%20lag%20i%20Trondheim';
        expect(urlBuilderSimpleSearch(case1)).toBe(answer);
    });
});

describe('urlBuilderFetchData', () => {
    test('Should return correct string', () => {
        const answer1 = BASE_URL + '/sports/';
        const answer2 = BASE_URL + '/clubs/';
        const answer3 = BASE_URL + '/regions/';
        const answer4 = BASE_URL + '/teams/';
        const answer5 = BASE_URL + '/cities/';
        const answer6 = BASE_URL + '/groups/';
        expect(urlBuilderFetchData(SPORT)).toBe(answer1);
        expect(urlBuilderFetchData(CLUB)).toBe(answer2);
        expect(urlBuilderFetchData(REGION)).toBe(answer3);
        expect(urlBuilderFetchData(TEAM)).toBe(answer4);
        expect(urlBuilderFetchData(CITY)).toBe(answer5);
        expect(urlBuilderFetchData(GROUP)).toBe(answer6);
    });
});

describe('urlBuilderGetQuestions', () => {
    test('Should return correct string', () => {
        const answer1 = BASE_URL + '/questions';
        expect(urlBuilderGetQuestions()).toBe(answer1);
    });
});

describe('urlBuilderPostQuestions', () => {
    test('Should return correct string', () => {
        const answer1 = BASE_URL + '/questionnaire/';
        expect(urlBuilderPostQuestions()).toBe(answer1);
    });
});
