import { regionInterface, selected } from '../../../interfaces';
import { combinedState } from '../../store';
import { regionActionTypes, SET_REGIONS, SET_SELECTED_REGION } from './regionActions';

export interface regionState {
    regions: regionInterface[];
    selectedRegion: selected;
}

export const regionInitialState: regionState = {
    regions: [
        { id: 0, name: 'Midtnorge' },
        { id: 1, name: 'Oslo/Viken' },
        { id: 2, name: 'Nord norge' },
        { id: 3, name: 'Vestlandet' },
        { id: 4, name: 'Sørlandet' },
    ],
    selectedRegion: { id: -1, name: '' },
};

export const regionReducer = (state = regionInitialState, action: regionActionTypes): regionState => {
    switch (action.type) {
        case SET_REGIONS: {
            return {
                ...state,
                regions: action.payload,
            };
        }
        case SET_SELECTED_REGION: {
            return {
                ...state,
                selectedRegion: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};
