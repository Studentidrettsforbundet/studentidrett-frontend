import { groupInterface } from '../../../interfaces';

export const SET_GROUPS = 'SET_GROUPS';

interface setGroupAction {
    type: typeof SET_GROUPS;
    payload: groupInterface[];
}

export type groupActionTypes = setGroupAction;

export const setGroupsActionCreator = (data: groupInterface[]): groupActionTypes => {
    return {
        type: SET_GROUPS,
        payload: data,
    };
};
