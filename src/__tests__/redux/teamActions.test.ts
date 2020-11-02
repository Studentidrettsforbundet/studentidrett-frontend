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
                availability: 'OP',
                cost: null,
                equipment: null,
                facebook_link: null,
                gender: 'M',
                group: 1,
                image: null,
                instagram_link: null,
                location: 1,
                long_description: 'Team A is the best',
                name: 'Team A',
                schedule: [],
                tryout_dates: [],
                webpage: null,
                season: null,
                short_description: 'Short desc',
                skill_level: 'HI',
                sport: 1,
            },
            {
                id: 2,
                availability: 'OP',
                cost: null,
                equipment: null,
                facebook_link: null,
                gender: 'M',
                group: 1,
                image: null,
                instagram_link: null,
                location: 1,
                long_description: 'Team A is the best',
                name: 'Team B',
                schedule: [],
                tryout_dates: [],
                webpage: null,
                season: null,
                short_description: 'Short desc',
                skill_level: 'HI',
                sport: 1,
            },
        ];

        const expected = {
            type: SET_TEAMS,
            payload: data,
        };

        expect(setTeamsActionCreator(data)).toStrictEqual(expected);
    });

    test('Should create an empty teamAction', () => {
        const data = [
            { id: 0, name: 'Trondheim', region: 'Midtnorge', clubs: [] },
            { id: 1, name: 'Oslo', clubs: [] },
        ];

        const expected = {
            type: SET_TEAMS,
            payload: [{ id: 1, name: 'Oslo', clubs: [] }],
        };

        expect(setTeamsActionCreator(data)).toStrictEqual(expected);
    });
});
