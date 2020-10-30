import { teamInterface } from '../../../interfaces';
import { SET_TEAMS, SET_TEAMS_DETAIL, teamActionTypes } from './teamActions';

export interface teamState {
    teams: teamInterface[];
    team: teamInterface | null;
}

export const teamInitialState: teamState = {
    teams: [],
    team: null,
};

export const teamReducer = (state = teamInitialState, action: teamActionTypes): teamState => {
    switch (action.type) {
        case SET_TEAMS: {
            return {
                ...state,
                teams: action.payload,
            };
        }
        case SET_TEAMS_DETAIL: {
            return {
                ...state,
                team: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};
