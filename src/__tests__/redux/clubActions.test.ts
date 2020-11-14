import React from 'react';
import {
    SET_CLUBS,
    SET_CLUBS_DETAIL,
    setClubsActionCreator,
    setClubsActionDetailCreator,
} from '../../store/pages/club/clubActions';
import { clubList2, invalidCityList, singleClub } from '../../assets/testMock';

describe('Actions', () => {
    test('Should create an empty setClubAction', () => {
        const expected = {
            type: SET_CLUBS,
            payload: [],
        };

        expect(setClubsActionCreator([])).toStrictEqual(expected);
    });

    test('Should create a setClubAction', () => {
        const data = clubList2;

        const expected = {
            type: SET_CLUBS,
            payload: data,
        };

        expect(setClubsActionCreator(data)).toStrictEqual(expected);
    });

    test('Should create an empty setClubAction', () => {
        const data = invalidCityList;
        const expected = {
            type: SET_CLUBS,
            payload: [],
        };

        expect(setClubsActionCreator(data)).toStrictEqual(expected);
    });

    test('Should create an empty setClubDetailAction', () => {
        const expected = {
            type: SET_CLUBS_DETAIL,
            payload: null,
        };

        expect(setClubsActionDetailCreator(null)).toStrictEqual(expected);
    });

    test('Should create a setClubDetailAction', () => {
        const data = singleClub;

        const expected = {
            type: SET_CLUBS_DETAIL,
            payload: data,
        };

        expect(setClubsActionDetailCreator(data)).toStrictEqual(expected);
    });

    test('Should create an empty setClubDetailAction', () => {
        const data = invalidCityList;
        const expected = {
            type: SET_CLUBS_DETAIL,
            payload: null,
        };

        expect(setClubsActionDetailCreator(data)).toStrictEqual(expected);
    });
});
