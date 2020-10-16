import { cityInterface } from '../../../interfaces';
import { cityActionTypes, SET_CITIES } from './cityActions';

export interface cityState {
    cities: cityInterface[];
}

export const cityInitialState: cityState = {
    cities: [
        { id: 0, name: 'Trondheim', region: 'Midtnorge', clubs: [] },
        { id: 1, name: 'Oslo', region: 'Oslo/Viken', clubs: [] },
        { id: 2, name: 'Bergen', region: 'Vestlandet', clubs: [] },
        { id: 3, name: 'Stavanger', region: 'Vestlandet', clubs: [] },
        { id: 4, name: 'Kristiansand', region: 'Sørlandet', clubs: [] },
        { id: 5, name: 'Orkanger', region: 'Midtnorge', clubs: [] },
        { id: 6, name: 'Steinkjær', region: 'Midtnorge', clubs: [] },
        { id: 7, name: 'Verdalsøra', region: 'Midtnorge', clubs: [] },
    ],
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

export interface cityByRegion {
    cities: cityInterface[][];
}

export const citybyregion: cityByRegion = {
    cities: 
        [[cityInitialState.cities[0], cityInitialState.cities[5], cityInitialState.cities[6], cityInitialState.cities[7]],
        [cityInitialState.cities[1]],
        [cityInitialState.cities[2], cityInitialState.cities[3]],
        [cityInitialState.cities[4]]]      
};
