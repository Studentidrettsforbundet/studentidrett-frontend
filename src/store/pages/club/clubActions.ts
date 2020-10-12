import { clubInterface } from '../../../interfaces';
import { instanceOfClub } from '../../../services/interfaceValidators';

export const SET_CLUBS = 'SET_CLUBS';

interface setClubsAction {
    type: typeof SET_CLUBS;
    payload: clubInterface[];
}

export type clubActionTypes = setClubsAction;

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
