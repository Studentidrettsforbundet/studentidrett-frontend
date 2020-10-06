import React from 'react';
import { SET_REGIONS } from '../store/pages/region/regionActions';
import { regionInitialState, regionReducer } from '../store/pages/region/regionReducer';

describe('Region reducer', () => {
    it('Should return the initial state', () => {
        const initialState = regionInitialState;
        expect(regionReducer(undefined, {})).toEqual(initialState);
    });

    it('Should handle SET_REGIONS', () => {
        const data = [
            { id: 3, name: 'Vestlandet' },
            { id: 4, name: 'Sørlandet' },
        ];

        expect(
            regionReducer(undefined, {
                type: SET_REGIONS,
                payload: data,
            }),
        ).toEqual({ regions: data });
    });

    it('Should handle SET_REGIONS with initialState', () => {
        const initialState = [
            { id: 0, name: 'Midtnorge' },
            { id: 1, name: 'Oslo/Viken' },
            { id: 2, name: 'Nord norge' },
        ];
        const data = { id: 3, name: 'Vestlandet' };

        expect(
            regionReducer(
                { regions: initialState },
                {
                    type: SET_REGIONS,
                    payload: [data],
                },
            ),
        ).toEqual({ regions: [data] });
    });
});
