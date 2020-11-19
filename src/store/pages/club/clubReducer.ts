import { clubInterface } from '../../../interfaces';
import { clubActionTypes, SET_CLUBS, SET_CLUBS_DETAIL } from './clubActions';

export interface clubState {
    clubs: clubInterface[];
    club: clubInterface | null;
}

export const clubInitialState: clubState = {
    clubs: [],
    club: null,
};

export const clubReducer = (state = clubInitialState, action: clubActionTypes): clubState => {
    switch (action.type) {
        case SET_CLUBS: {
            return {
                ...state,
                clubs: action.payload,
            };
        }

        case SET_CLUBS_DETAIL: {
            return {
                ...state,
                club: action.payload,
            };
        }

        default: {
            return state;
        }
    }
};
