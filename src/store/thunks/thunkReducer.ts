import { thunkActionTypes, FETCH_IN_PROGRESS, FETCH_SUCCESS, FETCH_FAILED } from "./thunkActions";

export interface thunkState {
    fetch_in_progress: boolean;
    fetch_failed: boolean;
    fetch_success: boolean;
}

export const thunkInitialState: thunkState = {
    fetch_in_progress: false,
    fetch_failed: false,
    fetch_success: false,
};

export const thunkReducer = (state = thunkInitialState, action: thunkActionTypes): thunkState => {
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
