import React from 'react';
import { SET_TEAMS } from '../../store/pages/team/teamActions';
import { FETCH_FAILED, FETCH_IN_PROGRESS, FETCH_SUCCESS, RESET_FETCH_STATUSES } from '../../store/thunks/thunkActions';
import { thunkInitialState, thunkReducer } from '../../store/thunks/thunkReducer';

describe('Thunk reducer', () => {
    it('Should return the initial state', () => {
        const initialState = thunkInitialState;
        expect(thunkReducer(undefined, {})).toEqual(initialState);
    });

    it('Should handle FETCH_IN_PROGRESSS', () => {

        expect(
            thunkReducer(undefined, {
                type: FETCH_IN_PROGRESS,
            }),
        ).toEqual(
            {  
                fetch_in_progress: true,
                fetch_failed: false,
                fetch_success: false,
                fetch_failed_count: 0,
            });
    });

    it('Should handle FETCH_SUCCESS', () => {

        expect(
            thunkReducer(undefined, {
                type: FETCH_SUCCESS,
            }),
        ).toEqual(
            {  
            fetch_in_progress: false,
            fetch_failed: false,
            fetch_success: true,
            fetch_failed_count: 0,
        }
            );
    });

    it('Should handle FETCH_FAILED', () => {

        expect(
            thunkReducer(undefined, {
                type: FETCH_FAILED,
            }),
        ).toEqual(
            {  
                fetch_in_progress: false,
                fetch_failed: true,
                fetch_success: false,
                fetch_failed_count: 1,
            });
    });

    it('Should handle RESET_FETCH_STATUSES', () => {

        expect(
            thunkReducer(undefined, {
                type: RESET_FETCH_STATUSES,
            }),
        ).toEqual(
            {  
            fetch_in_progress: false,
            fetch_failed: false,
            fetch_success: false,
            fetch_failed_count: 0,
        }
            );
    });
});
