import React from 'react';
import { SET_REGIONS, setRegionsActionCreator } from '../../store/pages/region/regionActions';
import {invalidCityList, regionList5} from "../../assets/testMock";

describe('Actions', () => {
    test('Should create an empty setRegionsAction', () => {
        const expected = {
            type: SET_REGIONS,
            payload: [],
        };

        expect(setRegionsActionCreator([])).toStrictEqual(expected);
    });

    test('Should create a setRegionsAction', () => {
        const data = regionList5;

        const expected = {
            type: SET_REGIONS,
            payload: data,
        };

        expect(setRegionsActionCreator(data)).toStrictEqual(expected);
    });

    test('Should create an empty setRegionsActionCreator', () => {
        const data = invalidCityList;

        const expected = {
            type: SET_REGIONS,
            payload: [],
        };

        expect(setRegionsActionCreator(data)).toStrictEqual(expected);
    });
});
