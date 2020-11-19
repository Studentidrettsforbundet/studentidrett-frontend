import { searchInterface } from '../../../interfaces';
import { SET_SEARCH, searchActionTypes } from './searchActions';

export interface searchState {
    results: searchInterface[];
}

export const searchInitialState: searchState = {
    results: [],
};

export const searchReducer = (state = searchInitialState, action: searchActionTypes): searchState => {
    switch (action.type) {
        case SET_SEARCH: {
            return {
                ...state,
                results: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};
