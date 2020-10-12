import React from 'react';
import { setGroupsActionCreator, SET_GROUPS } from '../../store/pages/group/groupActions';

describe('Actions', () => {
    test('Should create an empty setGroupsAction', () => {
        const expected = {
            type: SET_GROUPS,
            payload: [],
        };

        expect(setGroupsActionCreator([])).toStrictEqual(expected);
    });

    test('Should create a setGroupAction', () => {
        const data = [
            {
                id: 33,
                name: 'ntnui hockey',
                description: 'A hockey group at NTNUI',
                cover_photo: 'photo',
                club: 0,
                city: 3,
                contact_email: 'hockey@ntnui.no',
                sports: [],
            },
            {
                id: 0,
                name: 'ntnui football',
                description: 'A football group at NTNUI',
                cover_photo: 'photo',
                club: 0,
                city: 0,
                contact_email: 'football@ntnui.no',
                sports: [],
            },
        ];

        const expected = {
            type: SET_GROUPS,
            payload: data,
        };

        expect(setGroupsActionCreator(data)).toStrictEqual(expected);
    });

    test('Should create an empty setGroupsActionCreator', () => {
        const data = [
            { id: 0, name: 'Trondheim', region: 'Midtnorge', clubs: [] },
            { id: 1, name: 'Oslo', clubs: [] },
        ];

        const expected = {
            type: SET_GROUPS,
            payload: [],
        };

        expect(setGroupsActionCreator(data)).toStrictEqual(expected);
    });
});
