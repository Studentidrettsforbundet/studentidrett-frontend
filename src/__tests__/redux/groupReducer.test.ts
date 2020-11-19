import React from 'react';
import { SET_GROUPS, SET_GROUPS_DETAIL } from '../../store/pages/group/groupActions';
import { groupInitialState, groupReducer } from '../../store/pages/group/groupReducer';
import { groupList1, newGroup, singleGroup } from '../../assets/testMock';

describe('group reducer', () => {
    it('Should return the initial state', () => {
        const initialState = groupInitialState;
        expect(groupReducer(undefined, {})).toEqual(initialState);
    });

    it('Should handle SET_GROUPES', () => {
        const data = groupList1;
        expect(
            groupReducer(undefined, {
                type: SET_GROUPS,
                payload: data,
            }),
        ).toEqual({ groups: data, group: null });
    });

    it('Should handle SET_GROUPES with initialState', () => {
        const initialState = groupList1;
        const data = singleGroup;

        expect(
            groupReducer(
                { groups: initialState, group: null },
                {
                    type: SET_GROUPS,
                    payload: [data],
                },
            ),
        ).toEqual({ groups: [data], group: null });
    });

    it('Should handle SET_GROUPS_DETAIL', () => {
        const data = singleGroup;
        expect(
            groupReducer(undefined, {
                type: SET_GROUPS_DETAIL,
                payload: data,
            }),
        ).toEqual({ groups: [], group: data });
    });

    it('Should handle SET_GROUPS_DETAIL with initialState', () => {
        const initialState = groupList1;
        const data = singleGroup;

        expect(
            groupReducer(
                { groups: initialState, group: null },
                {
                    type: SET_GROUPS_DETAIL,
                    payload: data,
                },
            ),
        ).toEqual({ groups: initialState, group: data });
    });

    it('Should handle SET_GROUPS_DETAIL with initialState, override current group', () => {
        const initialState = singleGroup;
        const data = newGroup;

        expect(
            groupReducer(
                { groups: [], group: initialState },
                {
                    type: SET_GROUPS_DETAIL,
                    payload: data,
                },
            ),
        ).toEqual({ groups: [], group: data });
    });
});
