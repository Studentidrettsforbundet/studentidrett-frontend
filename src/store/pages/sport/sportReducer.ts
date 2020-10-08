import { sportInterface } from '../../../interfaces';
import { SET_SPORTS, sportActionTypes } from './sportActions';

export interface sportState {
    sports: sportInterface[];
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
};

export const sportReducer = (state = sportInitialState, action: sportActionTypes): sportState => {
    switch (action.type) {
        case SET_SPORTS: {
            return {
                ...state,
                sports: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};
