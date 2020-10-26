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
            {
                id: 0,
                name: 'Football',
                labels: [
                    {
                        text: 'utendørs',
                        sports: ['Fotball', 'Langrenn', 'Rumpeldunk'],
                        alternatives: ['Utendørs'],
                    },
                ],
            },

            {
                id: 1,
                name: 'Handball',
                labels: [
                    {
                        text: 'utendørs',
                        sports: ['Hanball'],
                        alternatives: ['Indoors'],
                    },
                ],
            },
            {
                id: 2,
                name: 'Basketball',
                labels: [
                    {
                        text: 'utendørs',
                        sports: ['Basketball'],
                        alternatives: ['Utendørs'],
                    },
                ],
            },
            {
                id: 3,
                name: 'American football',
                labels: [
                    {
                        text: 'utendørs',
                        sports: ['Fotball'],
                        alternatives: ['Utendørs'],
                    },
                ],
            },
            {
                id: 4,
                name: 'Baseball',
                labels: [
                    {
                        text: 'utendørs',
                        sports: ['Baseball'],
                        alternatives: ['Utendørs'],
                    },
                ],
            },
        ];

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
});
