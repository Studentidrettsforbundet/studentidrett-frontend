import React from 'react';
import { SET_CLUBS } from '../store/pages/club/clubActions';
import { clubInitialState, clubReducer } from '../store/pages/club/clubReducer';

describe('Club reducer', () => {
    it('Should return the initial state', () => {
        const initialState = clubInitialState;
        expect(clubReducer(undefined, {})).toEqual(initialState);
    });

    it('Should handle SET_CLUBS', () => {
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

        expect(
            clubReducer(undefined, {
                type: SET_CLUBS,
                payload: data,
            }),
        ).toEqual({ clubs: data });
    });

    it('Should handle SET_CLUBS with initialState', () => {
        const initialState = [
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
        const data = {
            id: 3,
            city: 1,
            name: 'NTNUI Bowling',
            description: '',
            contact_email: 'info@ntnui.no',
            pricing: 330,
            register_info: 'Register at ntnui.no/register',
        };

        expect(
            clubReducer(
                { clubs: initialState },
                {
                    type: SET_CLUBS,
                    payload: [data],
                },
            ),
        ).toEqual({ clubs: [data] });
    });
});
