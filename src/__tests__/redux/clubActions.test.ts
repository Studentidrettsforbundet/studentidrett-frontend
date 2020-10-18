import React from 'react';
import { SET_CLUBS, setClubsActionCreator } from '../../store/pages/club/clubActions';

describe('Actions', () => {
    test('Should create an empty setClubAction', () => {
        const expected = {
            type: SET_CLUBS,
            payload: [],
        };

        expect(setClubsActionCreator([])).toStrictEqual(expected);
    });

    test('Should create a setClubAction', () => {
        const data = [
            {
                id: 0,
                city: 0,
                name: 'NTNUI football',
                description: '',
                contact_email: 'info@ntnui.no',
                membership_fee: 200,
                register_info: 'Register at ntnui.no/register',
            },
            {
                id: 1,
                city: 0,
                name: 'NTNUI amerikansk fotball',
                description: '',
                contact_email: 'info@ntnui.no',
                membership_fee: 200,
                register_info: 'Register at ntnui.no/register',
            },
        ];

        const expected = {
            type: SET_CLUBS,
            payload: data,
        };

        expect(setClubsActionCreator(data)).toStrictEqual(expected);
    });

    test('Should create an empty setClubAction', () => {
        const data = [
            { id: 0, name: 'Trondheim', region: 'Midtnorge', clubs: [] },
            { id: 1, name: 'Oslo', clubs: [] },
        ];

        const expected = {
            type: SET_CLUBS,
            payload: [],
        };

        expect(setClubsActionCreator(data)).toStrictEqual(expected);
    });
});
