import React from 'react';
import { SET_SPORTS, setSportsActionCreator } from '../../store/pages/sport/sportActions';

describe('Actions', () => {
    test('Should create an empty setSportsAction', () => {
        const expected = {
            type: SET_SPORTS,
            payload: [],
        };

        expect(setSportsActionCreator([])).toStrictEqual(expected);
    });

    test('Should create a setSportsAction', () => {
        const data = [
            { id: 0, name: 'Football' },
            { id: 1, name: 'Handball' },
            { id: 2, name: 'Basketball' },
            { id: 3, name: 'American football' },
            { id: 4, name: 'Baseball' },
            { id: 5, name: 'Hockey' },
            { id: 6, name: 'Tennis' },
            { id: 7, name: 'Cross country skiing' },
            { id: 8, name: 'Rowing' },
            { id: 9, name: 'Fencing' },
        ];

        const expected = {
            type: SET_SPORTS,
            payload: data,
        };

        expect(setSportsActionCreator(data)).toStrictEqual(expected);
    });
});
