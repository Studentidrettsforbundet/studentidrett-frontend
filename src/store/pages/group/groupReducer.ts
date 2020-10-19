import { groupInterface } from '../../../interfaces';
import { groupActionTypes, SET_GROUPS } from './groupActions';

export interface groupState {
    groups: groupInterface[];
}

export const groupInitialState: groupState = {
    groups: [],
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
