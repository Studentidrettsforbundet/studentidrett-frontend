import { teamInterface } from '../../../interfaces';
import { SET_TEAMS, teamActionTypes } from './teamActions';

export interface teamState {
    teams: teamInterface[];
}

export const teamInitialState: teamState = {
    teams: [
        {
            id: 0,
            name: 'MEN A',
            full_capacity: true,
            short_description: 'Elite male team at NTNUI',
            long_description:
                'This is the elite men team at NTNUI football. Vi train 5 times a week and competite at a professional level',
            tryouts: true,
            registration_open: false,
            group: 1,
        },
        {
            id: 0,
            name: 'Kvinner 96',
            full_capacity: true,
            short_description: 'Elite female team at NTNUI',
            long_description:
                'This is the elite female team at NTNUI football. Vi train 5 times a week and competite at a professional level',
            tryouts: true,
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
