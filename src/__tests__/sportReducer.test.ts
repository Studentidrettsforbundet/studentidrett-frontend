import React from 'react';
import { SET_SPORTS } from '../store/pages/sport/sportActions';
import { sportInitialState, sportReducer } from '../store/pages/sport/sportReducer';

describe('Sport reducer', () => {
    it('Should return the initial state', () => {
        const initialState = sportInitialState;
        expect(sportReducer(undefined, {})).toEqual(initialState);
    });

    it('Should handle SET_REGIONS', () => {
        const data = [
            { id: 0, name: 'Football' },
            { id: 3, name: 'American football' },
        ];

        expect(
            sportReducer(undefined, {
                type: SET_SPORTS,
                payload: data,
            }),
        ).toEqual({ sports: data });
    });

    it('Should handle SET_REGIONS with initialState', () => {
        const initialState = [
            { id: 0, name: 'Football' },
            { id: 1, name: 'Handball' },
            { id: 2, name: 'Basketball' },
            { id: 3, name: 'American football' },
            { id: 4, name: 'Baseball' },
        ];
        const data = { id: 6, name: 'Tennis' };

        expect(
            sportReducer(
                { sports: initialState },
                {
                    type: SET_SPORTS,
                    payload: [data],
                },
            ),
        ).toEqual({ sports: [data] });
    });
});
