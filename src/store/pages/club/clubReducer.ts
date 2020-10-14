import { clubInterface } from '../../../interfaces';
import { clubActionTypes, SET_CLUBS } from './clubActions';

export interface clubState {
    clubs: clubInterface[];
}

export const clubInitialState: clubState = {
    clubs: [
        {
            id: 0,
            city: 0,
            name: 'NTNUI football',
            description: '',
            contact_email: 'info@ntnui.no',
            pricing: '200 kr',
            register_info: 'Register at ntnui.no/register',
        },
        {
            id: 1,
            city: 0,
            name: 'NTNUI amerikansk fotball',
            description: '',
            contact_email: 'info@ntnui.no',
            pricing: '200 kr',
            register_info: 'Register at ntnui.no/register',
        },
    ],
};

export const clubReducer = (state = clubInitialState, action: clubActionTypes): clubState => {
    switch (action.type) {
        case SET_CLUBS: {
            return {
                ...state,
                clubs: action.payload,
            };
        }

        default: {
            return state;
        }
    }
};
