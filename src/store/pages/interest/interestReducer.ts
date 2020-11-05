import { SET_SESSIONID, ADD_INTEREST, interestActionTypes } from './interestActions';

export interface interestState {
    sessionID: string | null;
    interests: string[];
}

export const interestInitialState: interestState = {
    sessionID: null,
    interests: [],
};

export const interestReducer = (state = interestInitialState, action: interestActionTypes): interestState => {
    switch (action.type) {
        case SET_SESSIONID: {
            return {
                ...state,
                sessionID: action.payload,
            };
        }
        case ADD_INTEREST: {
            return {
                ...state,
                interests: [...state.interests, action.payload],
            };
        }
        default: {
            return state;
        }
    }
};
