import React from 'react';
import { SET_REGIONS, setRegionsActionCreator } from '../../store/pages/region/regionActions';

describe('Actions', () => {
    test('Should create an empty setRegionsAction', () => {
        const expected = {
            type: SET_REGIONS,
            payload: [],
        };

        expect(setRegionsActionCreator([])).toStrictEqual(expected);
    });

    test('Should create a setRegionsAction', () => {
        const data = [
            { id: 0, name: 'Midtnorge' },
            { id: 1, name: 'Oslo/Viken' },
            { id: 2, name: 'Nord norge' },
            { id: 3, name: 'Vestlandet' },
            { id: 4, name: 'Sørlandet' },
        ];

        const expected = {
            type: SET_REGIONS,
            payload: data,
        };

        expect(setRegionsActionCreator(data)).toStrictEqual(expected);
    });

    test('Should create an empty setRegionsActionCreator', () => {
        const data = [
            { id: 0, name: 'Trondheim', region: 'Midtnorge', clubs: [] },
            { id: 1, name: 'Oslo', clubs: [] },
        ];

        const expected = {
            type: SET_REGIONS,
            payload: [],
        };

        expect(setRegionsActionCreator(data)).toStrictEqual(expected);
    });
});
