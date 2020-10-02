import { cityInterface } from '../../../interfaces';
import { combinedState } from '../../store';
import { cityActionTypes, SET_CITIES } from './cityActions';

export interface cityState {
    cities: cityInterface[];
}

export const cityInitialState: cityState = {
    cities: [],
};

export const cityReducer = (state = cityInitialState, action: cityActionTypes): cityState => {
    switch (action.type) {
        case SET_CITIES: {
            return {
                ...state,
                cities: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};
