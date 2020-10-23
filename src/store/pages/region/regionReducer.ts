import { regionInterface } from '../../../interfaces';
import { regionActionTypes, SET_REGIONS } from './regionActions';

export interface regionState {
    regions: regionInterface[];
}

export const regionInitialState: regionState = {
    regions: [],
};

export const regionReducer = (state = regionInitialState, action: regionActionTypes): regionState => {
    switch (action.type) {
        case SET_REGIONS: {
            return {
                ...state,
                regions: action.payload,
            };
        }

        default: {
            return state;
        }
    }
};
