export interface thunkState {
    fetchInProgress: boolean;
    fetchSuccess: boolean;
    fetchFailed: boolean;
}

export const thunkInitialState: thunkState = {
    fetchInProgress: false,
    fetchSuccess: false,
    fetchFailed: false,
};

export const thunkReducer = (state = thunkInitialState, action: thunkActionTypes): thunkState => {
    switch (action.type) {
        case SET_CITIES: {
            return {
                ...state,
                cities: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};
