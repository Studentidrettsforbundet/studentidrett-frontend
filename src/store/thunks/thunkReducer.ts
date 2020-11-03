import { prev_next } from '../../interfaces';
import {
    thunkActionTypes,
    FETCH_IN_PROGRESS,
    FETCH_SUCCESS,
    FETCH_FAILED,
    RESET_FETCH_STATUSES,
    POST_IN_PROGRESS,
    POST_SUCCESS,
    POST_FAILED,
} from './thunkActions';

export interface thunkState {
    fetch_in_progress: boolean;
    fetch_failed: boolean;
    fetch_success: boolean;
    fetch_failed_count: number;
    prev_next: prev_next;
    post_in_progress: boolean;
    post_failed: boolean;
    post_success: boolean;
    post_failed_count: number;
}

export const thunkInitialState: thunkState = {
    fetch_in_progress: false,
    fetch_failed: false,
    fetch_success: false,
    fetch_failed_count: 0,
    prev_next: {
        next: null,
        previous: null,
    },
    post_in_progress: false,
    post_failed: false,
    post_success: false,
    post_failed_count: 0,
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
                fetch_failed_count: state.fetch_failed_count + 1,
                prev_next: {
                    next: null,
                    previous: null,
                },
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
                    previous: null,
                },
                post_failed: false,
                post_failed_count: 0,
                post_in_progress: false,
                post_success: false,
            };
        }
        case POST_IN_PROGRESS: {
            return {
                ...state,
                post_in_progress: true,
                post_failed: false,
                post_success: false,
            };
        }
        case POST_SUCCESS: {
            return {
                ...state,
                post_in_progress: false,
                post_failed: false,
                post_success: true,
                post_failed_count: 0,
            };
        }
        case POST_FAILED: {
            return {
                ...state,
                post_in_progress: false,
                post_failed: true,
                post_success: false,
                post_failed_count: state.post_failed_count + 1,
            };
        }
        default: {
            return state;
        }
    }
};
