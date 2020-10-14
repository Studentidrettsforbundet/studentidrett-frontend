import React from 'react';
import { SET_GROUPS } from '../../store/pages/group/groupActions';
import { groupInitialState, groupReducer } from '../../store/pages/group/groupReducer';

describe('group reducer', () => {
    it('Should return the initial state', () => {
        const initialState = groupInitialState;
        expect(groupReducer(undefined, {})).toEqual(initialState);
    });

    it('Should handle SET_GROUPES', () => {
        const data = [
            { id: 33, name: 'ntnui hockey', description: 'A hockey group at NTNUI', cover_photo: "photo", club: 0, city: 3, contact_email: "hockey@ntnui.no", sports: [] }
        ];
        expect(
            groupReducer(undefined, {
                type: SET_GROUPS,
                payload: data,
            }),
        ).toEqual({ groups: data });
    });

    it('Should handle SET_GROUPES with initialState', () => {
        const initialState = [
            { id: 0, name: 'ntnui football', description: 'A football group at NTNUI', cover_photo: "photo", club: 0, city: 0, contact_email: "football@ntnui.no", sports: [] },
        ];
        const data = { id: 33, name: 'ntnui hockey', description: 'A hockey group at NTNUI', cover_photo: "photo", club: 0, city: 3, contact_email: "hockey@ntnui.no", sports: [] }

        expect(
            groupReducer(
                { groups: initialState },
                {
                    type: SET_GROUPS,
                    payload: [data],
                },
            ),
        ).toEqual({ groups: [data] });
    });
});
