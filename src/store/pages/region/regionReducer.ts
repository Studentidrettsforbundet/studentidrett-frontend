import { regionInterface } from '../../../interfaces';
import { combinedState } from '../../store';
import { regionActionTypes, SET_REGIONS } from './regionActions';

export interface regionState {
    regions: regionInterface[];
}

export const regionInitialState: regionState = {
    regions: [
        { id: 0, name: 'Mitdnorge' },
        { id: 1, name: 'Oslo/Viken' },
        { id: 2, name: 'Nord norge' },
        { id: 3, name: 'Vestlandet' },
        { id: 4, name: 'Sørlandet' },
    ],
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
