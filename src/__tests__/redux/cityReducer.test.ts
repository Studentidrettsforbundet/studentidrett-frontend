import React from 'react';
import { SET_CITIES } from '../../store/pages/city/cityActions';
import { cityInitialState, cityReducer } from '../../store/pages/city/cityReducer';

describe('City reducer', () => {
    it('Should return the initial state', () => {
        const initialState = cityInitialState;
        expect(cityReducer(undefined, {})).toEqual(initialState);
    });

    it('Should handle SET_CITIES', () => {
        const data = [
            { id: 6, name: 'Steinkjær', region: 'Midtnorge', clubs: [] },
            { id: 7, name: 'Verdalsøra', region: 'Midtnorge', clubs: [] },
        ];
        expect(
            cityReducer(undefined, {
                type: SET_CITIES,
                payload: data,
            }),
        ).toEqual({ cities: data });
    });

    it('Should handle SET_CITIES with initialState', () => {
        const initialState = [
            { id: 0, name: 'Trondheim', region: 'Midtnorge', clubs: [] },
            { id: 1, name: 'Oslo', region: 'Oslo/Viken', clubs: [] },
            { id: 2, name: 'Bergen', region: 'Vestlandet', clubs: [] },
            { id: 3, name: 'Stavanger', region: 'Vestlandet', clubs: [] },
        ];
        const data = { id: 5, name: 'Orkanger', region: 'Midtnorge', clubs: [] };

        expect(
            cityReducer(
                { cities: initialState },
                {
                    type: SET_CITIES,
                    payload: [data],
                },
            ),
        ).toEqual({ cities: [data] });
    });
});
