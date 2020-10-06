import { teamInterface } from '../../../interfaces';
import { SET_TEAMS, teamActionTypes } from './teamActions';

export interface teamState {
    teams: teamInterface[];
}

export const teamInitialState: teamState = {
    teams: [
        {
            id: 0,
            name: 'Men A',
            full_capacity: true,
            short_description: 'Elite team men',
            long_description: '',
            tryouts: true,
            registration_open: false,
            group: 0,
        },
        {
            id: 1,
            name: 'Men B',
            full_capacity: true,
            short_description: 'Semi-elite team men',
            long_description: '',
            tryouts: true,
            registration_open: false,
            group: 0,
        },
        {
            id: 2,
            name: 'Woman 12',
            full_capacity: false,
            short_description: 'Elite team woman',
            long_description: '',
            tryouts: true,
            registration_open: true,
            group: 0,
        },
        {
            id: 3,
            name: 'Tigers',
            full_capacity: true,
            short_description: 'Semi-elite team woman',
            long_description: '',
            tryouts: false,
            registration_open: false,
            group: 0,
        },
        {
            id: 4,
            name: 'Lions',
            full_capacity: false,
            short_description: 'beginner team woman',
            long_description: '',
            tryouts: false,
            registration_open: true,
            group: 0,
        },
        {
            id: 5,
            name: 'Quickers',
            full_capacity: false,
            short_description: 'beginner team men',
            long_description: '',
            tryouts: false,
            registration_open: true,
            group: 0,
        },
        {
            id: 6,
            name: 'Footzall 1',
            full_capacity: false,
            short_description: 'beginner team woman',
            long_description: '',
            tryouts: false,
            registration_open: true,
            group: 1,
        },
        {
            id: 7,
            name: 'Footzall 2',
            full_capacity: false,
            short_description: 'beginner team men',
            long_description: '',
            tryouts: false,
            registration_open: false,
            group: 1,
        },
    ],
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
