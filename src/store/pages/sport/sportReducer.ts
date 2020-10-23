import { sportInterface } from '../../../interfaces';
import { SET_SPORTS, sportActionTypes } from './sportActions';

export interface sportState {
    sports: sportInterface[];
}

export const sportInitialState: sportState = {
    sports: [],
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
