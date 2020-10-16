import { prev_next } from "../../interfaces";
import { thunkActionTypes, FETCH_IN_PROGRESS, FETCH_SUCCESS, FETCH_FAILED, RESET_FETCH_STATUSES } from "./thunkActions";

export interface thunkState {
    fetch_in_progress: boolean;
    fetch_failed: boolean;
    fetch_success: boolean;
    fetch_failed_count: number;
    prev_next: prev_next;
}

export const thunkInitialState: thunkState = {
    fetch_in_progress: false,
    fetch_failed: false,
    fetch_success: false,
    fetch_failed_count: 0,
    prev_next: {
        next: null,
        previous: null,
    }
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
                fetch_failed_count: 0,
                prev_next: action.payload,
            };
        }
        case FETCH_FAILED: {
            return {
                ...state,
                fetch_in_progress: false,
                fetch_failed: true,
                fetch_success: false,
                fetch_failed_count: state.fetch_failed_count +1,
                prev_next: {
                    next: null,
                    previous: null
                }
            };
        }
        case RESET_FETCH_STATUSES: {
            return {
                ...state,
                fetch_in_progress: false,
                fetch_failed: false,
                fetch_success: false,
                fetch_failed_count: 0,
                prev_next: {
                    next: null,
                    previous: null
                }
            }
        }
        default: {
            return state;
        }
    }
};
