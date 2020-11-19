import React from 'react';
import {
    fetchDetailSuccessActionCreator,
    fetchFailedActionCreator,
    fetchInProgressActionCreator,
    fetchSuccessActionCreator,
    FETCH_FAILED,
    FETCH_IN_PROGRESS,
    FETCH_SUCCESS,
    postFailedActionCreator,
    postInProgressActionCreator,
    postSuccessActionCreator,
    POST_FAILED,
    POST_IN_PROGRESS,
    POST_SUCCESS,
    resetFetchStatusesActionCreator,
    RESET_FETCH_STATUSES,
} from '../../store/thunks/thunkActions';

describe('Actions', () => {
    test('Should create a fetchInProgressAction', () => {
        expect(fetchInProgressActionCreator()).toStrictEqual({ type: FETCH_IN_PROGRESS });
    });

    test('Should create a fetchFailedAction', () => {
        expect(fetchFailedActionCreator()).toStrictEqual({ type: FETCH_FAILED });
    });

    test('Should create a fetchSuccessAction with null as data', () => {
        const data = {
            next: null,
            previous: null,
        };
        expect(fetchSuccessActionCreator(data)).toStrictEqual({ type: FETCH_SUCCESS, payload: data });
    });

    test('Should create a fetchSuccessAction', () => {
        const data = {
            next: 'https:://next.data.com',
            previous: 'https:://prev.data.com',
        };
        expect(fetchSuccessActionCreator(data)).toStrictEqual({ type: FETCH_SUCCESS, payload: data });
    });

    test('Should create a resetFetchStatusesAction', () => {
        expect(resetFetchStatusesActionCreator()).toStrictEqual({ type: RESET_FETCH_STATUSES });
    });

    test('Should create a postInProgressAction', () => {
        expect(postInProgressActionCreator()).toStrictEqual({ type: POST_IN_PROGRESS });
    });

    test('Should create a postFailedAction', () => {
        expect(postFailedActionCreator()).toStrictEqual({ type: POST_FAILED });
    });

    test('Should create a postSuccessAction', () => {
        expect(postSuccessActionCreator()).toStrictEqual({ type: POST_SUCCESS });
    });

    test('Should create a fetchDetailSuccessAction', () => {
        expect(fetchDetailSuccessActionCreator()).toStrictEqual({ type: FETCH_SUCCESS });
    });
});
