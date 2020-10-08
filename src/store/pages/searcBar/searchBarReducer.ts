import { searchBarActionTypes, FETCH_IN_PROGRESS, FETCH_FAILED, FETCH_SUCCESS } from './searchBarActions';

export interface searchBarState {
    fetch_in_progress: boolean;
    fetch_failed: boolean;
    fetch_success: boolean;
}

export const searchbarInitialState: searchBarState = {
    fetch_in_progress: false,
    fetch_failed: false,
    fetch_success: false,
};

export const searchBarReducer = (state = searchbarInitialState, action: searchBarActionTypes): searchBarState => {
    switch (action.type) {
        case FETCH_IN_PROGRESS: {
            return {
                ...state,
                fetch_in_progress: true,
                fetch_failed: false,
                fetch_success: false,
            };
        }
        case FETCH_SUCCESS: {
            return {
                ...state,
                fetch_in_progress: false,
                fetch_failed: false,
                fetch_success: true,
            };
        }
        case FETCH_FAILED: {
            return {
                ...state,
                fetch_in_progress: false,
                fetch_failed: true,
                fetch_success: false,
            };
        }
        default: {
            return state;
        }
    }
};
