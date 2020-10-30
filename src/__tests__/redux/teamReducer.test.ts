import React from 'react';
import { SET_TEAMS } from '../../store/pages/team/teamActions';
import { teamInitialState, teamReducer } from '../../store/pages/team/teamReducer';
import { dateInterface } from '../../interfaces';

describe('Team reducer', () => {
    it('Should return the initial state', () => {
        const initialState = teamInitialState;
        expect(teamReducer(undefined, {})).toEqual(initialState);
    });

    it('Should handle SET_REGIONS', () => {
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
        ];

        expect(
            teamReducer(undefined, {
                type: SET_TEAMS,
                payload: data,
            }),
        ).toEqual({ team: null, teams: data });
    });

    it('Should handle SET_REGIONS with initialState', () => {
        const initialState = [
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
            {
                id: 2,
                availability: 'OP',
                cost: null,
                equipment: null,
                facebook_link: null,
                gender: 'F',
                group: 1,
                image: null,
                instagram_link: null,
                location: 1,
                long_description: 'Team A is the best',
                name: 'Team C',
                schedule: [],
                tryout_dates: [],
                webpage: null,
                season: null,
                short_description: 'Short desc',
                skill_level: 'HI',
                sport: 1,
            },
        ];
        const data = {
            id: 4,
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
            name: 'Team D',
            schedule: [],
            tryout_dates: [],
            webpage: null,
            season: null,
            short_description: 'Short desc',
            skill_level: 'HI',
            sport: 1,
        };

        expect(
            teamReducer(
                { teams: initialState, team: null },
                {
                    type: SET_TEAMS,
                    payload: [data],
                },
            ),
        ).toEqual({ teams: [data], team: null });
    });
});
