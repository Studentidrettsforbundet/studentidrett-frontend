import { searchBarActionTypes, TOGGLE_SEARCHBAR } from './searchBarActions';

export interface searchBarState {
    showSearchBar: boolean;
}

export const searchBarInitialState: searchBarState = {
    showSearchBar: false,
};

export const searchBarReducer = (state = searchBarInitialState, action: searchBarActionTypes): searchBarState => {
    switch (action.type) {
        case TOGGLE_SEARCHBAR: {
            return {
                ...state,
                showSearchBar: !state.showSearchBar,
            };
        }
        default: {
            return state;
        }
    }
};
