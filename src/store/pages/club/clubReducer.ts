import { clubInterface, selected } from '../../../interfaces';
import { combinedState } from '../../store';
import { clubActionTypes, SET_CLUBS, SET_SELECTED_CLUB } from './clubActions';

export interface clubState {
    clubs: clubInterface[];
    selectedClub: selected;
}

export const clubInitialState: clubState = {
    clubs: [
        {
            id: 0,
            city: 0,
            name: 'NTNUI football',
            description: '',
            contact_email: 'info@ntnui.no',
            pricing: 200,
            register_info: 'Register at ntnui.no/register',
        },
        {
            id: 1,
            city: 0,
            name: 'NTNUI amerikansk fotball',
            description: '',
            contact_email: 'info@ntnui.no',
            pricing: 200,
            register_info: 'Register at ntnui.no/register',
        },
    ],
    selectedClub: { id: -1, name: '' },
};

export const clubReducer = (state = clubInitialState, action: clubActionTypes): clubState => {
    switch (action.type) {
        case SET_CLUBS: {
            return {
                ...state,
                clubs: action.payload,
            };
        }
        case SET_SELECTED_CLUB: {
            return {
                ...state,
                selectedClub: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};
