import React from 'react';
import { SET_REGIONS, setRegionActionCreator } from '../../store/pages/region/regionActions';

describe('Actions', () => {
    test('Should create an empty setRegionsAction', () => {
        const expected = {
            type: SET_REGIONS,
            payload: [],
        };

        expect(setRegionActionCreator([])).toStrictEqual(expected);
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

        expect(setRegionActionCreator(data)).toStrictEqual(expected);
    });
});
