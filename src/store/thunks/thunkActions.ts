import { prev_next } from '../../interfaces';

export const FETCH_IN_PROGRESS = 'FETCH_IN_PROGRESS';
export const FETCH_FAILED = 'FETCH_FAILED';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const POST_IN_PROGRESS = 'POST_IN_PROGRESS';
export const POST_FAILED = 'POST_FAILED';
export const POST_SUCCESS = 'POST_SUCCESS';
export const RESET_FETCH_STATUSES = 'RESET_FETCH_STATUSES';

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

interface postInProgressAction {
    type: typeof POST_IN_PROGRESS;
}

interface postFailedAction {
    type: typeof POST_FAILED;
}

interface postSuccessAction {
    type: typeof POST_SUCCESS;
}

interface fetchDetailSuccessAction {
    type: typeof FETCH_SUCCESS;
}

interface resetFetchStatusesAction {
    type: typeof RESET_FETCH_STATUSES;
}

export type thunkActionTypes =
    | fetchInProgressAction
    | fetchFailedAction
    | fetchSuccessAction
    | resetFetchStatusesAction
    | postFailedAction
    | postInProgressAction
    | postSuccessAction;

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
        payload: data,
    };
};

export const fetchDetailSuccessActionCreator = (): fetchDetailSuccessAction => {
    return {
        type: FETCH_SUCCESS,
    };
};

export const resetFetchStatusesActionCreator = (): resetFetchStatusesAction => {
    return {
        type: RESET_FETCH_STATUSES,
    };
};

export const postInProgressActionCreator = (): postInProgressAction => {
    return {
        type: POST_IN_PROGRESS,
    };
};

export const postFailedActionCreator = (): postFailedAction => {
    return {
        type: POST_FAILED,
    };
};

export const postSuccessActionCreator = (): postSuccessAction => {
    return {
        type: POST_SUCCESS,
    };
};
