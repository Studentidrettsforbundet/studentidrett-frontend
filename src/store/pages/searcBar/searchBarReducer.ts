import { searchBarActionTypes, FETCH_IN_PROGRESS, FETCH_FAILED, FETCH_COMPLETE } from './searchBarActions';

export interface searchBarState {
    fetch_in_progress: boolean;
    fetch_failed: boolean;
    fetch_complete: boolean;
}

export const searchbarInitialState: searchBarState = {
    fetch_in_progress: false,
    fetch_failed: false,
    fetch_complete: false,
};

export const searchBarReducer = (state = searchbarInitialState, action: searchBarActionTypes): searchBarState => {
    switch (action.type) {
        case FETCH_IN_PROGRESS: {
            return {
                ...state,
                fetch_in_progress: true,
                fetch_failed: false,
                fetch_complete: false,
            };
        }
        case FETCH_COMPLETE: {
            return {
                ...state,
                fetch_in_progress: false,
                fetch_failed: false,
                fetch_complete: true,
            };
        }
        case FETCH_FAILED: {
            return {
                ...state,
                fetch_in_progress: false,
                fetch_failed: true,
                fetch_complete: true,
            };
        }
        default: {
            return state;
        }
    }
};
