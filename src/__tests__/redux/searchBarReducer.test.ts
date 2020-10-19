import React from 'react';
import { TOGGLE_SEARCHBAR } from '../../store/searchBar/searchBarActions';
import { searchBarInitialState, searchBarReducer } from '../../store/searchBar/searchBarReducer';

describe('Region reducer', () => {
    it('Should return the initial state', () => {
        const initialState = searchBarInitialState;
        expect(searchBarReducer(undefined, {})).toEqual(initialState);
    });

    it('Should handle TOGGLE_SEARCHBAR with initialstate 1', () => {
        const initialState = { showSearchBar: false };
        expect(
            searchBarReducer(initialState, {
                type: TOGGLE_SEARCHBAR,
            }),
        ).toEqual({ showSearchBar: true });
    });

    it('Should handle TOGGLE_SEARCHBAR with initialstate 2', () => {
        const initialState = { showSearchBar: true };
        expect(
            searchBarReducer(initialState, {
                type: TOGGLE_SEARCHBAR,
            }),
        ).toEqual({ showSearchBar: false });
    });
});
