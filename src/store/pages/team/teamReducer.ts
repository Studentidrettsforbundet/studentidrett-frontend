import { teamInterface } from '../../../interfaces';
import { SET_TEAMS, teamActionTypes } from './teamActions';

export interface teamState {
    teams: teamInterface[];
}

export const teamInitialState: teamState = {
    teams: [],
};

export const teamReducer = (state = teamInitialState, action: teamActionTypes): teamState => {
    switch (action.type) {
        case SET_TEAMS: {
            return {
                ...state,
                teams: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};
