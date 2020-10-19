import { groupInterface } from '../../../interfaces';
import { groupActionTypes, SET_GROUPS } from './groupActions';;

export interface groupState {
    groups: groupInterface[];
}

export const groupInitialState: groupState = {
    groups: [
        { id: 0, name: 'ntnui football', description: 'A football group at NTNUI', cover_photo: "photo", club: 0, city: 0, contact_email: "football@ntnui.no", sports: [] },
    ],
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
