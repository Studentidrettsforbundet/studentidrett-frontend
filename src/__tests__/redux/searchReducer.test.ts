import React from 'react';
import { SET_SEARCH } from '../../store/pages/search/searchActions';
import { searchInitialState, searchReducer } from '../../store/pages/search/searchReducer';
import { newSearchResult, searchResult } from '../../assets/testMock';

describe('Region reducer', () => {
    it('Should return the initial state', () => {
        const initialState = searchInitialState;
        expect(searchReducer(undefined, {})).toEqual(initialState);
    });

    it('Should handle SET_REGIONS', () => {
        const data = searchResult;

        expect(
            searchReducer(undefined, {
                type: SET_SEARCH,
                payload: [data],
            }),
        ).toEqual({ results: [data] });
    });

    it('Should handle SET_REGIONS with initialState', () => {
        const initialState = [searchResult];
        const data = newSearchResult;

        expect(
            searchReducer(
                { results: initialState },
                {
                    type: SET_SEARCH,
                    payload: [data],
                },
            ),
        ).toEqual({ results: [data] });
    });
});
