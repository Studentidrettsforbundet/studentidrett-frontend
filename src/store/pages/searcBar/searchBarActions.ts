// Const actions

export const FETCH_IN_PROGRESS = 'FETCH_IN_PROGRESS';
export const FETCH_FAILED = 'FETCH_FAILED';
export const FETCH_COMPLETE = 'FETCH_COMPLETE';

// Action interface
interface fetchStartAction {
    type: typeof FETCH_IN_PROGRESS;
}

interface fetchFailedAction {
    type: typeof FETCH_FAILED;
}

interface fetchCompleteAction {
    type: typeof FETCH_COMPLETE;
    //TODO: add result from fetch
}

// The type that our reducer will need to use these acions
export type searchBarActionTypes = fetchStartAction | fetchFailedAction | fetchCompleteAction;

// Action creators
export const fetchDataActionCreator = (): fetchStartAction => {
    return {
        type: FETCH_IN_PROGRESS,
    };
};

export const fetchFailedActionCreator = (): fetchFailedAction => {
    return {
        type: FETCH_FAILED,
    };
};

export const fetchCompleteActionCreator = (): fetchCompleteAction => {
    return {
        type: FETCH_COMPLETE,
    };
};
