import React from 'react';
import { setCitiesActionCreator, SET_CITIES } from '../../store/pages/city/cityActions';
import { cityList, invalidCityList } from '../../assets/testMock';

describe('Actions', () => {
    test('Should create an empty setCityAction', () => {
        const expected = {
            type: SET_CITIES,
            payload: [],
        };

        expect(setCitiesActionCreator([])).toStrictEqual(expected);
    });

    test('Should create a setCityAction', () => {
        const data = cityList;

        const expected = {
            type: SET_CITIES,
            payload: data,
        };

        expect(setCitiesActionCreator(data)).toStrictEqual(expected);
    });

    test('Should create an empty setCityAction', () => {
        const data = invalidCityList;

        const expected = {
            type: SET_CITIES,
            payload: [],
        };

        expect(setCitiesActionCreator(data)).toStrictEqual(expected);
    });
});
