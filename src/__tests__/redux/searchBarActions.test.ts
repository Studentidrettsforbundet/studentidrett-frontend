import React from 'react';
import {
    FETCH_IN_PROGRESS,
    fetchInProgressActionCreator,
    FETCH_FAILED,
    fetchFailedActionCreator,
    FETCH_SUCCESS,
    fetchSuccessActionCreator,
} from '../../store/pages/searcBar/searchBarActions';

describe('Actions', () => {
    test('Should create a fetchStartAction', () => {
        const expected = {
            type: FETCH_IN_PROGRESS,
        };

        expect(fetchInProgressActionCreator()).toStrictEqual(expected);
    });

    test('Should create a fetchFailedAction', () => {
        const expected = {
            type: FETCH_FAILED,
        };

        expect(fetchFailedActionCreator()).toStrictEqual(expected);
    });

    test('Should create a fetchCompleteAction', () => {
        const expected = {
            type: FETCH_SUCCESS,
        };

        expect(fetchSuccessActionCreator()).toStrictEqual(expected);
    });
});
