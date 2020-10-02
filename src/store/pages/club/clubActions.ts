import { clubInterface } from '../../../interfaces';

export const SET_CLUBS = 'SET_CLUBS';

interface setClubsAction {
    type: typeof SET_CLUBS;
    payload: clubInterface[];
}

export type clubActionTypes = setClubsAction;

export const setRegionActionCreator = (data: clubInterface[]): clubActionTypes => {
    return {
        type: SET_CLUBS,
        payload: data,
    };
};
