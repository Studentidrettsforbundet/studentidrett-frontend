import { sportInterface } from '../../../interfaces';
import { SET_SPORTS, SET_SPORTS_DETAIL, sportActionTypes } from './sportActions';

export interface sportState {
    sports: sportInterface[];
    sport: sportInterface | null;
}

export const sportInitialState: sportState = {
    sports: [],
    sport: null,
};

export const sportReducer = (state = sportInitialState, action: sportActionTypes): sportState => {
    switch (action.type) {
        case SET_SPORTS: {
            return {
                ...state,
                sports: action.payload,
            };
        }
        case SET_SPORTS_DETAIL: {
            return {
                ...state,
                sport: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};
