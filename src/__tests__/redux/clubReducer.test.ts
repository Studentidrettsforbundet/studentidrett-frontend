import React from 'react';
import {SET_CLUBS, SET_CLUBS_DETAIL} from '../../store/pages/club/clubActions';
import { clubInitialState, clubReducer } from '../../store/pages/club/clubReducer';
import {clubList2, newClub, singleClub} from "../../assets/testMock";

describe('Club reducer', () => {
    it('Should return the initial state', () => {
        const initialState = clubInitialState;
        expect(clubReducer(undefined, {})).toEqual(initialState);
    });

    it('Should handle SET_CLUBS', () => {
        const data = clubList2;

        expect(
            clubReducer(undefined, {
                type: SET_CLUBS,
                payload: data,
            }),
        ).toEqual({ clubs: data, club: null });
    });

    it('Should handle SET_CLUBS with initialState', () => {
        const initialState = clubList2;
        const data = singleClub;

        expect(
            clubReducer(
                { clubs: initialState, club: null },
                {
                    type: SET_CLUBS,
                    payload: [data],
                },
            ),
        ).toEqual({ clubs: [data], club: null });
    });

    it('Should handle SET_CLUBS_DETAILS', () => {
        const data = singleClub;

        expect(
            clubReducer(undefined, {
                type: SET_CLUBS_DETAIL,
                payload: data,
            }),
        ).toEqual({ clubs: [], club: data });
    });

    it('Should handle SET_CLUBS_DETAILS with initialState', () => {
        const initialState = clubList2;
        const data = singleClub;

        expect(
            clubReducer(
                { clubs: initialState, club: null },
                {
                    type: SET_CLUBS_DETAIL,
                    payload: data,
                },
            ),
        ).toEqual({ clubs: initialState, club: data });
    });

    it('Should handle SET_CLUBS_DETAILS with initialState', () => {
        const initialState = singleClub;
        const data = newClub;

        expect(
            clubReducer(
                { clubs: [], club: initialState },
                {
                    type: SET_CLUBS_DETAIL,
                    payload: data,
                },
            ),
        ).toEqual({ clubs: [], club: data });
    });
});
