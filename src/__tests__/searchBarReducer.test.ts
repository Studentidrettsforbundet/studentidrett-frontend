import React from 'react';
import { FETCH_SUCCESS, FETCH_FAILED, FETCH_IN_PROGRESS } from '../store/pages/searcBar/searchBarActions';
import { searchbarInitialState, searchBarReducer } from '../store/pages/searcBar/searchBarReducer';

describe('SearchBar reducer', () => {
    it('Should return the initial state', () => {
        const initialState = searchbarInitialState;
        expect(searchBarReducer(undefined, {})).toEqual(initialState);
    });

    it('Should handle FETCH_IN_PROGRESS', () => {
        expect(
            searchBarReducer(undefined, {
                type: FETCH_IN_PROGRESS,
            }),
        ).toEqual({ fetch_in_progress: true, fetch_failed: false, fetch_success: false });
    });

    it('Should handle FETCH_SUCCESS', () => {
        expect(
            searchBarReducer(undefined, {
                type: FETCH_SUCCESS,
            }),
        ).toEqual({ fetch_in_progress: false, fetch_failed: false, fetch_success: true });
    });

    it('Should handle FETCH_FAILED', () => {
        expect(
            searchBarReducer(undefined, {
                type: FETCH_FAILED,
            }),
        ).toEqual({ fetch_in_progress: false, fetch_failed: true, fetch_success: false });
    });
});
