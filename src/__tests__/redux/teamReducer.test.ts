import React from 'react';
import { SET_TEAMS, SET_TEAMS_DETAIL } from '../../store/pages/team/teamActions';
import { teamInitialState, teamReducer } from '../../store/pages/team/teamReducer';
import { dateInterface } from '../../interfaces';
import { newTeam, singleTeam, teamList2 } from '../../assets/testMock';

describe('Team reducer', () => {
    it('Should return the initial state', () => {
        const initialState = teamInitialState;
        expect(teamReducer(undefined, {})).toEqual(initialState);
    });

    it('Should handle SET_TEAMS', () => {
        const data = teamList2;

        expect(
            teamReducer(undefined, {
                type: SET_TEAMS,
                payload: data,
            }),
        ).toEqual({ team: null, teams: data });
    });

    it('Should handle SET_TEAMS with initialState', () => {
        const initialState = teamList2;
        const data = newTeam;

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

    it('Should handle SET_TEAMS_DETAIL', () => {
        const data = singleTeam;

        expect(
            teamReducer(undefined, {
                type: SET_TEAMS_DETAIL,
                payload: data,
            }),
        ).toEqual({ team: data, teams: [] });
    });

    it('Should handle SET_TEAMS_DETAIL with initialState', () => {
        const initialState = teamList2;
        const data = newTeam;

        expect(
            teamReducer(
                { teams: initialState, team: null },
                {
                    type: SET_TEAMS_DETAIL,
                    payload: data,
                },
            ),
        ).toEqual({ teams: initialState, team: data });
    });

    it('Should handle SET_TEAMS_DETAIL with initialState, override team', () => {
        const initialState = singleTeam;
        const data = newTeam;

        expect(
            teamReducer(
                { teams: [], team: initialState },
                {
                    type: SET_TEAMS_DETAIL,
                    payload: data,
                },
            ),
        ).toEqual({ teams: [], team: data });
    });
});
