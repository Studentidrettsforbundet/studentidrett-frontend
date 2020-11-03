import { groupInterface } from '../../../interfaces';
import { instanceOfGroup } from '../../../services/interfaceValidators';

export const SET_GROUPS = 'SET_GROUPS';
export const SET_GROUPS_DETAIL = 'SET_GROUPS_DETAIL';

interface setGroupAction {
    type: typeof SET_GROUPS;
    payload: groupInterface[];
}

interface setGroupActionDetail {
    type: typeof SET_GROUPS_DETAIL;
    payload: groupInterface | null;
}

export type groupActionTypes = setGroupAction | setGroupActionDetail;

export const setGroupsActionCreator = (data: groupInterface[]): groupActionTypes => {
    if (data.every(instanceOfGroup)) {
        return {
            type: SET_GROUPS,
            payload: data,
        };
    }
    return {
        type: SET_GROUPS,
        payload: [],
    };
};

export const setGroupsActionDetailCreator = (data: groupInterface): groupActionTypes => {
    if (!data) {
        return {
            type: SET_GROUPS_DETAIL,
            payload: null,
        };
    } else if (instanceOfGroup(data)) {
        return {
            type: SET_GROUPS_DETAIL,
            payload: data,
        };
    }
    return {
        type: SET_GROUPS_DETAIL,
        payload: null,
    };
};
