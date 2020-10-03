import { cityInterface } from '../../../interfaces';
import { combinedState } from '../../store';
import { cityActionTypes, SET_CITIES, SET_SELECTED_CITY } from './cityActions';

export interface cityState {
    cities: cityInterface[];
    selectedCity: number;
}

export const cityInitialState: cityState = {
    cities: [
        { id: 0, name: 'Trondheim', region: 'Midtnorge', clubs: [] },
        { id: 1, name: 'Oslo', region: 'Oslo/Viken', clubs: [] },
        { id: 2, name: 'Bergen', region: 'Vestlandet', clubs: [] },
        { id: 3, name: 'Stavanger', region: 'Vestlandet', clubs: [] },
        { id: 4, name: 'Kristiansand', region: 'Sørlandet', clubs: [] },
        { id: 4, name: 'Orkanger', region: 'Midtnorge', clubs: [] },
        { id: 4, name: 'Steinkjær', region: 'Midtnorge', clubs: [] },
        { id: 4, name: 'Verdalsøra', region: 'Midtnorge', clubs: [] },
    ],
    selectedCity: -1,
};

export const cityReducer = (state = cityInitialState, action: cityActionTypes): cityState => {
    switch (action.type) {
        case SET_CITIES: {
            return {
                ...state,
                cities: action.payload,
            };
        }
        case SET_SELECTED_CITY: {
            return {
                ...state,
                selectedCity: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};
