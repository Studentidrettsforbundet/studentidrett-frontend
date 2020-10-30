import { groupInterface } from '../../../interfaces';
import { groupActionDetailTypes, groupActionTypes, SET_GROUPS, SET_GROUPS_DETAIL } from './groupActions';

export interface groupState {
    groups: groupInterface[];
    group: groupInterface | null;
}

export const groupInitialState: groupState = {
    groups: [],
    group: null,
};

export const groupReducer = (state = groupInitialState, action: groupActionTypes): groupState => {
    switch (action.type) {
        case SET_GROUPS: {
            return {
                ...state,
                groups: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};

export const groupDetailReducer = (state = groupInitialState, action: groupActionDetailTypes): groupState => {
    switch (action.type) {
        case SET_GROUPS_DETAIL: {
            return {
                ...state,
                group: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};
