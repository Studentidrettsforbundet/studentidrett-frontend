import React from 'react';
import { SET_CITIES } from '../../store/pages/city/cityActions';
import { cityInitialState, cityReducer } from '../../store/pages/city/cityReducer';
import {cityList, newCity} from "../../assets/testMock";

describe('City reducer', () => {
    it('Should return the initial state', () => {
        const initialState = cityInitialState;
        expect(cityReducer(undefined, {})).toEqual(initialState);
    });

    it('Should handle SET_CITIES', () => {
        const data = cityList;
        expect(
            cityReducer(undefined, {
                type: SET_CITIES,
                payload: data,
            }),
        ).toEqual({ cities: data });
    });

    it('Should handle SET_CITIES with initialState', () => {
        const initialState = cityList;
        const data = newCity;

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
