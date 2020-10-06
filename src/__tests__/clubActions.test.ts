import React from 'react';
import { setClubActionCreator, SET_CLUBS } from '../store/pages/club/clubActions';

describe('Actions', () => {
    test('Should create an empty setRegionAction', () => {
        const expected = {
            type: SET_CLUBS,
            payload: [],
        };

        expect(setClubActionCreator([])).toStrictEqual(expected);
    });

    test('Should create a seAction', () => {
        const data = [
            {
                id: 0,
                city: 0,
                name: 'NTNUI football',
                description: '',
                contact_email: 'info@ntnui.no',
                pricing: 200,
                register_info: 'Register at ntnui.no/register',
            },
            {
                id: 1,
                city: 0,
                name: 'NTNUI amerikansk fotball',
                description: '',
                contact_email: 'info@ntnui.no',
                pricing: 200,
                register_info: 'Register at ntnui.no/register',
            },
        ];

        const expected = {
            type: SET_CLUBS,
            payload: data,
        };

        expect(setClubActionCreator(data)).toStrictEqual(expected);
    });
});
