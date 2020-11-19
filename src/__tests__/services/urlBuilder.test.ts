import React from 'react';
import { BASE_URL, CITY, CLUB, GROUP, REGION, SPORT, TEAM } from '../../constants';
import {
    urlBuilderFetchData,
    urlBuilderGetQuestions,
    urlBuilderPostInterest,
    urlBuilderPostQuestions,
    urlBuilderSimpleSearch,
} from '../../services/urlBuilders';

describe('urlBuilderSimpleSearch', () => {
    test('Should normalization a single word', () => {
        const case1 = 'clubs/Football';
        const answer = BASE_URL + '/search/?q=' + case1;
        expect(urlBuilderSimpleSearch(case1)).toBe(answer);
    });

    test('Should handle any characters', () => {
        const case1 = "1234567890+`?=)(/&%¤#@£$€{[]}´^¨*'*,.;:_";
        const answer =
            BASE_URL +
            "/search/?q=1234567890+`?=)(/%26%25%C2%A4%23%40%C2%A3%24%E2%82%AC%7B%5B%5D%7D%C2%B4%5E%C2%A8*'*%2C.%3B%3A_";
        expect(urlBuilderSimpleSearch(case1)).toBe(answer);
    });

    test('Should handle empty search', () => {
        const case1 = '';
        const answer = BASE_URL + '/search/?q=';
        expect(urlBuilderSimpleSearch(case1)).toBe(answer);
    });
});

describe('urlBuilderFetchData', () => {
    test('Should return correct string', () => {
        const answer1 = BASE_URL + '/sports/?page_size=500';
        const answer2 = BASE_URL + '/clubs/?page_size=500';
        const answer3 = BASE_URL + '/regions/?page_size=500';
        const answer4 = BASE_URL + '/teams/?page_size=500';
        const answer5 = BASE_URL + '/cities/?page_size=500';
        const answer6 = BASE_URL + '/groups/?page_size=500';
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
        const answer1 = BASE_URL + '/questions/?page_size=500';
        expect(urlBuilderGetQuestions()).toBe(answer1);
    });
});

describe('urlBuilderPostQuestions', () => {
    test('Should return correct string', () => {
        const answer1 = BASE_URL + '/questionnaire/';
        expect(urlBuilderPostQuestions()).toBe(answer1);
    });
});

describe('urlBuilderPostInterest', () => {
    test('Should return correct string', () => {
        const answer1 = BASE_URL + '/interest/';
        expect(urlBuilderPostInterest()).toBe(answer1);
    });
});
