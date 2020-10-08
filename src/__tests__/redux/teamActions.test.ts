import React from 'react';
import { SET_TEAMS, setTeamsActionCreator } from '../../store/pages/team/teamActions';

describe('Actions', () => {
    test('Should create an empty setTeamsAction', () => {
        const expected = {
            type: SET_TEAMS,
            payload: [],
        };

        expect(setTeamsActionCreator([])).toStrictEqual(expected);
    });

    test('Should create a setTeamsAction', () => {
        const data = [
            {
                id: 0,
                name: 'Men A',
                full_capacity: true,
                short_description: 'Elite team men',
                long_description:
                    'The elite male football team at NTNUI. We exercise 4 times a week and play 2 matches a week',
                tryouts: true,
                registration_open: false,
                group: 0,
            },
            {
                id: 1,
                name: 'Men B',
                full_capacity: true,
                short_description: 'Semi-elite team men',
                long_description:
                    'The semi-elite male football team at NTNUI. We exercise 3 times a week and play 1 matche a week',
                tryouts: true,
                registration_open: false,
                group: 0,
            },
        ];

        const expected = {
            type: SET_TEAMS,
            payload: data,
        };

        expect(setTeamsActionCreator(data)).toStrictEqual(expected);
    });
});
