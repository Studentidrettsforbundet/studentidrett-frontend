import { regionInterface } from '../../../interfaces';
import { regionActionTypes, SET_REGIONS } from './regionActions';
import { citybyregion } from '../city/cityReducer';

export interface regionState {
    regions: regionInterface[];
}

export const regionInitialState: regionState = {
<<<<<<< HEAD
    regions: [
        { id: 0, name: 'Midtnorge', cities: citybyregion.cities[0] },
        { id: 1, name: 'Oslo/Viken', cities: citybyregion.cities[1]},
        { id: 3, name: 'Vestlandet', cities: citybyregion.cities[2]},
        { id: 4, name: 'Sørlandet', cities: citybyregion.cities[3]},
    ],
=======
    regions: [],
>>>>>>> 0377335d0fea5c7a5f036282af855d06993b041b
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
