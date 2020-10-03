import { isTypeReferenceNode } from 'typescript';
import { selected, sportInterface, teamInterface } from '../../../interfaces';
import { combinedState } from '../../store';
import { SET_SELECTED_TEAM, SET_TEAMS, teamActionTypes } from './teamActions';

export interface teamState {
    teams: teamInterface[];
    selectedSport: selected;
}

export const teamInitialState: teamState = {
    teams: [
        { id: 0, name: 'Men A', full_capacity: true, tryouts: true, registration_open: false, group: 0 },
        { id: 0, name: 'Men B', full_capacity: true, tryouts: true, registration_open: false, group: 0 },
        { id: 0, name: 'Woman 12', full_capacity: false, tryouts: true, registration_open: true, group: 0 },
        { id: 0, name: 'Tigers', full_capacity: true, tryouts: false, registration_open: false, group: 0 },
        { id: 0, name: 'Lions', full_capacity: false, tryouts: false, registration_open: true, group: 0 },
        { id: 0, name: 'Quickers', full_capacity: false, tryouts: false, registration_open: true, group: 0 },
        { id: 0, name: 'Footzall 1', full_capacity: false, tryouts: false, registration_open: true, group: 1 },
        { id: 0, name: 'Footzall 2', full_capacity: false, tryouts: false, registration_open: false, group: 1 },
    ],
    selectedSport: { id: -1, name: '' },
};

export const teamReducer = (state = teamInitialState, action: teamActionTypes): teamState => {
    switch (action.type) {
        case SET_TEAMS: {
            return {
                ...state,
                teams: action.payload,
            };
        }
        case SET_SELECTED_TEAM: {
            return {
                ...state,
                selectedSport: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};
