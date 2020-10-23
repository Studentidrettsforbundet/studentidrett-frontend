import { clubInterface } from '../../../interfaces';
import { clubActionTypes, SET_CLUBS } from './clubActions';

export interface clubState {
    clubs: clubInterface[];
}

export const clubInitialState: clubState = {
    clubs: [],
};

export const clubReducer = (state = clubInitialState, action: clubActionTypes): clubState => {
    switch (action.type) {
        case SET_CLUBS: {
            return {
                ...state,
                clubs: action.payload,
            };
        }

        default: {
            return state;
        }
    }
};
