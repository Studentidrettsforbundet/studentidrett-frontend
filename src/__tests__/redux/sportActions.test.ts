import React from 'react';
import {
    SET_SPORTS,
    SET_SPORTS_DETAIL,
    setSportsActionCreator,
    setSportsActionDetailCreator
} from '../../store/pages/sport/sportActions';
import {singleSport, sportList5} from '../../assets/testMock';

describe('Actions', () => {
    test('Should create an empty setSportsAction', () => {
        const expected = {
            type: SET_SPORTS,
            payload: [],
        };

        expect(setSportsActionCreator([])).toStrictEqual(expected);
    });

    test('Should create a setSportsAction', () => {
        const data = sportList5;

        const expected = {
            type: SET_SPORTS,
            payload: data,
        };

        expect(setSportsActionCreator(data)).toStrictEqual(expected);
    });

    test('Should create an empty setSportsAction', () => {
        const data = [
            { id: 0, name: 'Trondheim', region: 'Midtnorge', clubs: [] },
            { id: 1, name: 'Oslo', clubs: [] },
        ];

        const expected = {
            type: SET_SPORTS,
            payload: [],
        };

        expect(setSportsActionCreator(data)).toStrictEqual(expected);
    });

    test('Should create an empty setSportsActionDetail', () => {
        const expected = {
            type: SET_SPORTS_DETAIL,
            payload: null,
        };

        expect(setSportsActionDetailCreator(null)).toStrictEqual(expected);
    });

    test('Should create a setSportsActionDetail', () => {
        const data = singleSport;

        const expected = {
            type: SET_SPORTS_DETAIL,
            payload: data,
        };

        expect(setSportsActionDetailCreator(data)).toStrictEqual(expected);
    });

    test('Should create an empty setSportsActionDetail', () => {
        const data = [
            { id: 0, name: 'Trondheim', region: 'Midtnorge', clubs: [] },
            { id: 1, name: 'Oslo', clubs: [] },
        ];

        const expected = {
            type: SET_SPORTS_DETAIL,
            payload: null,
        };

        expect(setSportsActionDetailCreator(data)).toStrictEqual(expected);
    });
});
