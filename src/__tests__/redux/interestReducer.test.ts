import React from 'react';
import { interestInitialState, interestReducer } from '../../store/pages/interest/interestReducer';
import { SET_SESSIONID, ADD_INTEREST } from '../../store/pages/interest/interestActions';

describe('Interest reducer', () => {
    it('Should return the initial state', () => {
        const initialState = interestInitialState;
        expect(interestReducer(undefined, {})).toEqual(initialState);
    });

    it('Should handle SET_SESSIONID', () => {
        const data = 'thisIsASessionID';

        expect(
            interestReducer(undefined, {
                type: SET_SESSIONID,
                payload: data,
            }),
        ).toEqual({ sessionID: data, interests: [] });
    });

    it('Should handle ADD_INTEREST', () => {
        const data = '1';

        expect(
            interestReducer(undefined, {
                type: ADD_INTEREST,
                payload: data,
            }),
        ).toEqual({ sessionID: null, interests: [data] });
    });

    it('Should handle ADD_INTEREST with initialState', () => {
        const initialState1 = 'sessionID';
        const initialState2 = ['1', '2'];

        const data = ['1', '2', '3'];

        expect(
            interestReducer(
                { sessionID: initialState1, interests: initialState2 },
                {
                    type: ADD_INTEREST,
                    payload: '3',
                },
            ),
        ).toEqual({ sessionID: initialState1, interests: data });
    });
});
