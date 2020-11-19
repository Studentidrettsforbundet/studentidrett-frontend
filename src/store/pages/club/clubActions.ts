import { clubInterface } from '../../../interfaces';
import { instanceOfClub } from '../../../services/interfaceValidators';

export const SET_CLUBS = 'SET_CLUBS';
export const SET_CLUBS_DETAIL = 'SET_CLUBS_DETAIL';

interface setClubsAction {
    type: typeof SET_CLUBS;
    payload: clubInterface[];
}

interface setClubsDetailAction {
    type: typeof SET_CLUBS_DETAIL;
    payload: clubInterface | null;
}

export type clubActionTypes = setClubsAction | setClubsDetailAction;

export const setClubsActionCreator = (data: clubInterface[]): clubActionTypes => {
    if (data.every(instanceOfClub)) {
        return {
            type: SET_CLUBS,
            payload: data,
        };
    }
    return {
        type: SET_CLUBS,
        payload: [],
    };
};

export const setClubsActionDetailCreator = (data: clubInterface): clubActionTypes => {
    if (!data) {
        return {
            type: SET_CLUBS_DETAIL,
            payload: null,
        };
    } else if (instanceOfClub(data)) {
        return {
            type: SET_CLUBS_DETAIL,
            payload: data,
        };
    }
    return {
        type: SET_CLUBS_DETAIL,
        payload: null,
    };
};
