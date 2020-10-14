import { prev_next } from "../../interfaces";

export const FETCH_IN_PROGRESS = 'FETCH_IN_PROGRESS';
export const FETCH_FAILED = 'FETCH_FAILED';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const RESET_FETCH_STATUSES= 'RESET_FETCH_STATUSES';


interface fetchInProgressAction {
    type: typeof FETCH_IN_PROGRESS;
}

interface fetchFailedAction {
    type: typeof FETCH_FAILED;
}

interface fetchSuccessAction {
    type: typeof FETCH_SUCCESS;
    payload: prev_next;
}

interface resetFetchStatusesAction {
    type: typeof RESET_FETCH_STATUSES;
}


export type thunkActionTypes = fetchInProgressAction | fetchFailedAction | fetchSuccessAction | resetFetchStatusesAction;

export const fetchInProgressActionCreator = (): fetchInProgressAction => {
    return {
        type: FETCH_IN_PROGRESS,
    };
};

export const fetchFailedActionCreator = (): fetchFailedAction => {
    return {
        type: FETCH_FAILED,
    };
};

export const fetchSuccessActionCreator = (data: prev_next): fetchSuccessAction => {
    return {
        type: FETCH_SUCCESS,
        payload: data
    };
};

export const resetFetchStatusesActionCreator = (): resetFetchStatusesAction => {
    return {
        type: RESET_FETCH_STATUSES,
    };
};