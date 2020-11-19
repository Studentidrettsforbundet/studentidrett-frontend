import React from 'react';
import { SET_REGIONS } from '../../store/pages/region/regionActions';
import { regionInitialState, regionReducer } from '../../store/pages/region/regionReducer';
import { regionList3, singleRegion } from '../../assets/testMock';

describe('Region reducer', () => {
    it('Should return the initial state', () => {
        const initialState = regionInitialState;
        expect(regionReducer(undefined, {})).toEqual(initialState);
    });

    it('Should handle SET_REGIONS', () => {
        const data = regionList3;

        expect(
            regionReducer(undefined, {
                type: SET_REGIONS,
                payload: data,
            }),
        ).toEqual({ regions: data });
    });

    it('Should handle SET_REGIONS with initialState', () => {
        const initialState = regionList3;
        const data = singleRegion;

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
