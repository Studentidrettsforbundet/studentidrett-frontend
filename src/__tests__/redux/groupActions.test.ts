import React from 'react';
import {
    setGroupsActionCreator,
    SET_GROUPS,
    SET_GROUPS_DETAIL,
    setGroupsActionDetailCreator
} from '../../store/pages/group/groupActions';
import {groupList2, invalidCityList, singleGroup} from "../../assets/testMock";

describe('Actions', () => {
    test('Should create an empty setGroupsAction', () => {
        const expected = {
            type: SET_GROUPS,
            payload: [],
        };

        expect(setGroupsActionCreator([])).toStrictEqual(expected);
    });

    test('Should create a setGroupAction', () => {
        const data = groupList2

        const expected = {
            type: SET_GROUPS,
            payload: data,
        };

        expect(setGroupsActionCreator(data)).toStrictEqual(expected);
    });

    test('Should create an empty setGroupsActionCreator', () => {
        const data = invalidCityList;

        const expected = {
            type: SET_GROUPS,
            payload: [],
        };

        expect(setGroupsActionCreator(data)).toStrictEqual(expected);
    });

    test('Should create an empty setGroupsActionDetail', () => {
        const expected = {
            type: SET_GROUPS_DETAIL,
            payload: null,
        };

        expect(setGroupsActionDetailCreator(null)).toStrictEqual(expected);
    });

    test('Should create a setGroupActionDetail', () => {
        const data = singleGroup;

        const expected = {
            type: SET_GROUPS_DETAIL,
            payload: data,
        };

        expect(setGroupsActionDetailCreator(data)).toStrictEqual(expected);
    });

    test('Should create an empty setGroupsActionDetailCreator', () => {
        const data = invalidCityList;

        const expected = {
            type: SET_GROUPS_DETAIL,
            payload: null,
        };

        expect(setGroupsActionDetailCreator(data)).toStrictEqual(expected);
    });
});
