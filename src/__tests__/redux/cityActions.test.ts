import React from 'react';
import { setCityActionCreator, SET_CITIES } from '../../store/pages/city/cityActions';

describe('Actions', () => {
    test('Should create an empty setCityAction', () => {
        const expected = {
            type: SET_CITIES,
            payload: [],
        };

        expect(setCityActionCreator([])).toStrictEqual(expected);
    });

    test('Should create a setCityAction', () => {
        const data = [
            { id: 0, name: 'Trondheim', region: 'Midtnorge', clubs: [] },
            { id: 1, name: 'Oslo', region: 'Oslo/Viken', clubs: [] },
            { id: 2, name: 'Bergen', region: 'Vestlandet', clubs: [] },
            { id: 3, name: 'Stavanger', region: 'Vestlandet', clubs: [] },
        ];

        const expected = {
            type: SET_CITIES,
            payload: data,
        };

        expect(setCityActionCreator(data)).toStrictEqual(expected);
    });
});
