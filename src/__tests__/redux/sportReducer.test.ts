import React from 'react';
import { SET_SPORTS } from '../../store/pages/sport/sportActions';
import { sportInitialState, sportReducer } from '../../store/pages/sport/sportReducer';

describe('Sport reducer', () => {
    it('Should return the initial state', () => {
        const initialState = sportInitialState;
        expect(sportReducer(undefined, {})).toEqual(initialState);
    });

    it('Should handle SET_SPORTS', () => {
        const data = [
            { id: 0, name: 'Football', labels: [] },
            { id: 3, name: 'American football', labels: [] },
        ];

        expect(
            sportReducer(undefined, {
                type: SET_SPORTS,
                payload: data,
            }),
        ).toEqual({ sports: data, sport: null });
    });

    it('Should handle SET_REGIONS with initialState', () => {
        const initialState = [
            { id: 0, name: 'Football', labels: []},
            { id: 1, name: 'Handball', labels: [] },
            { id: 2, name: 'Basketball', labels: [] },
            { id: 3, name: 'American football', labels: [] },
            { id: 4, name: 'Baseball', labels: [] },
        ];
        const data = { id: 6, name: 'Tennis', labels: []};

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
});
