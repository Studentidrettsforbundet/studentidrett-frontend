import React from 'react';
import { SET_TEAMS } from '../../store/pages/team/teamActions';
import { teamInitialState, teamReducer } from '../../store/pages/team/teamReducer';

describe('Team reducer', () => {
    it('Should return the initial state', () => {
        const initialState = teamInitialState;
        expect(teamReducer(undefined, {})).toEqual(initialState);
    });

    it('Should handle SET_REGIONS', () => {
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
        ];

        expect(
            teamReducer(undefined, {
                type: SET_TEAMS,
                payload: data,
            }),
        ).toEqual({ teams: data });
    });

    it('Should handle SET_REGIONS with initialState', () => {
        const initialState = [
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
            {
                id: 2,
                name: 'Woman 12',
                full_capacity: false,
                short_description: 'Elite team woman',
                long_description:
                    'The elite female football team at NTNUI. We exercise 4 times a week and play 2 matche a week',
                tryouts: true,
                registration_open: true,
                group: 0,
            },
        ];
        const data = {
            id: 7,
            name: 'Footzall 2',
            full_capacity: false,
            short_description: 'beginner team men',
            long_description: '',
            tryouts: false,
            registration_open: false,
            group: 1,
        };

        expect(
            teamReducer(
                { teams: initialState },
                {
                    type: SET_TEAMS,
                    payload: [data],
                },
            ),
        ).toEqual({ teams: [data] });
    });
});
