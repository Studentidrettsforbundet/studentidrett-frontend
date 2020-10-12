import { groupInterface } from '../../../interfaces';
import { instanceOfGroup } from '../../../services/interfaceValidators';

export const SET_GROUPS = 'SET_GROUPS';

interface setGroupAction {
    type: typeof SET_GROUPS;
    payload: groupInterface[];
}

export type groupActionTypes = setGroupAction;

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
