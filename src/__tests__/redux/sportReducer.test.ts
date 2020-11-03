import React from 'react';
import {SET_SPORTS, SET_SPORTS_DETAIL} from '../../store/pages/sport/sportActions';
import { sportInitialState, sportReducer } from '../../store/pages/sport/sportReducer';
import {newSport, singleSport, sportList2, sportList5} from "../../assets/testMock";

describe('Sport reducer', () => {
    it('Should return the initial state', () => {
        const initialState = sportInitialState;
        expect(sportReducer(undefined, {})).toEqual(initialState);
    });

    it('Should handle SET_SPORTS', () => {
        const data = sportList2;

        expect(
            sportReducer(undefined, {
                type: SET_SPORTS,
                payload: data,
            }),
        ).toEqual({ sports: data, sport: null });
    });

    it('Should handle SET_SPORTS with initialState', () => {
        const initialState = sportList5;
        const data = newSport;

        expect(
            sportReducer(
                { sports: initialState, sport: null },
                {
                    type: SET_SPORTS,
                    payload: [data],
                },
            ),
        ).toEqual({ sports: [data], sport: null});
    });

    it('Should handle SET_SPORTS_DETAIL', () => {
        const data = singleSport;

        expect(
            sportReducer(undefined, {
                type: SET_SPORTS_DETAIL,
                payload: data,
            }),
        ).toEqual({ sports: [], sport: data });
    });

    it('Should handle SET_SPORTS_DETAIL with initialState', () => {
        const initialState = sportList5;
        const data = newSport;

        expect(
            sportReducer(
                { sports: initialState, sport: null },
                {
                    type: SET_SPORTS_DETAIL,
                    payload: data,
                },
            ),
        ).toEqual({ sports: initialState, sport: data});
    });

    it('Should handle SET_SPORTS_DETAIL with initialState, override sport', () => {
        const initialState = singleSport;
        const data = newSport;

        expect(
            sportReducer(
                { sports: [], sport: initialState },
                {
                    type: SET_SPORTS_DETAIL,
                    payload: data,
                },
            ),
        ).toEqual({ sports: [], sport: data});
    });
});
