import React from 'react';
import { toggleSearchBarActionCreator, TOGGLE_SEARCHBAR } from '../../store/searchBar/searchBarActions';

describe('Actions', () => {
    test('Should create a toggleSearchBarActionCreator', () => {
        const expected = {
            type: TOGGLE_SEARCHBAR,
            payload: true,
        };

        expect(toggleSearchBarActionCreator(true)).toStrictEqual(expected);
    });
});
