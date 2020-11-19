export const SET_SESSIONID = 'SET_SESSIONID';
export const ADD_INTEREST = 'ADD_INTEREST';

interface setSessionIDAction {
    type: typeof SET_SESSIONID;
    payload: string;
}

interface addInterestAction {
    type: typeof ADD_INTEREST;
    payload: string;
}

export type interestActionTypes = setSessionIDAction | addInterestAction;

export const setSessionIDActionCreator = (): interestActionTypes => {
    let generatedID;
    for (generatedID = ''; generatedID.length < 16; ) generatedID += Math.random().toString(36).substr(2, 1);
    return {
        type: SET_SESSIONID,
        payload: generatedID,
    };
};

export const addInterestActionCreator = (data: string): interestActionTypes => {
    return {
        type: ADD_INTEREST,
        payload: data,
    };
};
