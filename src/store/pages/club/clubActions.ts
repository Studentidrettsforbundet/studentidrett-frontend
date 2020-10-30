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
    payload: clubInterface;
}

export type clubActionTypes = setClubsAction;
export type clubActionDetailTypes = setClubsDetailAction;

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

export const setClubsActionDetailCreator = (data: clubInterface): clubActionDetailTypes => {
    return {
        type: SET_CLUBS_DETAIL,
        payload: data,
    }
};