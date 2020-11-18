import React from 'react';
import {
    SET_TEAMS,
    SET_TEAMS_DETAIL,
    setTeamsActionCreator,
    setTeamsActionDetailCreator,
} from '../../store/pages/team/teamActions';
import { singleTeam, teamList2 } from '../../assets/testMock';

describe('Actions', () => {
    test('Should create an empty setTeamsAction', () => {
        const expected = {
            type: SET_TEAMS,
            payload: [],
        };

        expect(setTeamsActionCreator([])).toStrictEqual(expected);
    });

    test('Should create a setTeamsAction', () => {
        const data = teamList2;

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
            payload: [],
        };

        expect(setTeamsActionCreator(data)).toStrictEqual(expected);
    });

    test('Should create an empty setTeamsAction', () => {
        const expected = {
            type: SET_TEAMS_DETAIL,
            payload: null,
        };

        expect(setTeamsActionDetailCreator(null)).toStrictEqual(expected);
    });

    test('Should create a setTeamsActionDetail', () => {
        const data = singleTeam;

        const expected = {
            type: SET_TEAMS_DETAIL,
            payload: data,
        };

        expect(setTeamsActionDetailCreator(data)).toStrictEqual(expected);
    });

    test('Should create an empty teamActionDetail', () => {
        const data = [
            { id: 0, name: 'Trondheim', region: 'Midtnorge', clubs: [] },
            { id: 1, name: 'Oslo', clubs: [] },
        ];

        const expected = {
            type: SET_TEAMS_DETAIL,
            payload: null,
        };

        expect(setTeamsActionDetailCreator(data)).toStrictEqual(expected);
    });
});
