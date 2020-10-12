import React from 'react';
import { fetchFailedActionCreator, fetchInProgressActionCreator, fetchSuccessActionCreator, FETCH_FAILED, FETCH_IN_PROGRESS, FETCH_SUCCESS, resetFetchStatusesActionCreator, RESET_FETCH_STATUSES } from '../../store/thunks/thunkActions';

describe('Actions', () => {

    test('Should create a fetchInProgressAction', () => {

        expect(fetchInProgressActionCreator()).toStrictEqual({type: FETCH_IN_PROGRESS});
    });

    test('Should create a fetchFailedAction', () => {

        expect(fetchFailedActionCreator()).toStrictEqual({type: FETCH_FAILED});
    });

    test('Should create a fetchSuccessAction', () => {

        expect(fetchSuccessActionCreator()).toStrictEqual({type: FETCH_SUCCESS});
    });

    test('Should create a resetFetchStatusesAction', () => {

        expect(resetFetchStatusesActionCreator()).toStrictEqual({type: RESET_FETCH_STATUSES});
    });
});
