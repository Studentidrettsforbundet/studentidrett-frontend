export const FETCH_IN_PROGRESS = 'FETCH_IN_PROGRESS';
export const FETCH_FAILED = 'FETCH_FAILED';
export const FETCH_SUCCESS = 'FETCH_COMPLETE';

interface fetchInProgressAction {
    type: typeof FETCH_IN_PROGRESS;
}

interface fetchFailedAction {
    type: typeof FETCH_FAILED;
}

interface fetchSuccessAction {
    type: typeof FETCH_SUCCESS;
    //TODO: add result from fetch
}

export type searchBarActionTypes = fetchInProgressAction | fetchFailedAction | fetchSuccessAction;

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

export const fetchSuccessActionCreator = (): fetchSuccessAction => {
    return {
        type: FETCH_SUCCESS,
    };
};
