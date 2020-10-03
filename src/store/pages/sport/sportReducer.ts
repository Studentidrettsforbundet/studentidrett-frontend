import { selected, sportInterface } from '../../../interfaces';
import { combinedState } from '../../store';
import { SET_SELECTED_SPORT, SET_SPORTS, sportActionTypes } from './sportActions';

export interface sportState {
    sports: sportInterface[];
    selectedSport: selected;
}

export const sportInitialState: sportState = {
    sports: [
        { id: 0, name: 'Football' },
        { id: 1, name: 'Handball' },
        { id: 2, name: 'Basketball' },
        { id: 3, name: 'American football' },
        { id: 4, name: 'Baseball' },
        { id: 5, name: 'Hockey' },
        { id: 6, name: 'Tennis' },
        { id: 7, name: 'Cross country skiing' },
        { id: 8, name: 'Rowing' },
        { id: 9, name: 'Fencing' },
    ],
    selectedSport: { id: -1, name: '' },
};

export const sportReducer = (state = sportInitialState, action: sportActionTypes): sportState => {
    switch (action.type) {
        case SET_SPORTS: {
            return {
                ...state,
                sports: action.payload,
            };
        }
        case SET_SELECTED_SPORT: {
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
