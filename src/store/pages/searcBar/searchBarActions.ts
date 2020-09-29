// Const actions

export const FETCH_IN_PROGRESS = 'FETCH_IN_PROGRESS';
export const FETCH_FAILED = 'FETCH_FAILED';
export const FETCH_COMPLETE = 'FETCH_COMPLETE';

// Action interface
interface FetchStartAction {
    type: typeof FETCH_IN_PROGRESS;
}

interface FetchFailedAction {
    type: typeof FETCH_FAILED;
}

interface FetchCompleteAction {
    type: typeof FETCH_COMPLETE;
    //TODO: add result from fetch
}

// The type that our reducer will need to use these acions
export type searchBarActionTypes = FetchStartAction | FetchFailedAction | FetchCompleteAction;

// Action creators
export const FetchDataActionCreator = (): FetchStartAction => {
    return {
        type: FETCH_IN_PROGRESS,
    };
};

export const FetchFailedActionCreator = (): FetchFailedAction => {
    return {
        type: FETCH_FAILED,
    };
};

export const FetchCompleteActionCreator = (): FetchCompleteAction => {
    return {
        type: FETCH_COMPLETE,
    };
};
