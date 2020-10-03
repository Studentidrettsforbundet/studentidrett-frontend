import { clubInterface, selected } from '../../../interfaces';

export const SET_CLUBS = 'SET_CLUBS';
export const SET_SELECTED_CLUB = 'SET_SELECTED_CLUBS';

interface setClubsAction {
    type: typeof SET_CLUBS;
    payload: clubInterface[];
}

interface setSelectedClubAction {
    type: typeof SET_SELECTED_CLUB;
    payload: selected;
}

export type clubActionTypes = setClubsAction | setSelectedClubAction;

export const setRegionActionCreator = (data: clubInterface[]): clubActionTypes => {
    return {
        type: SET_CLUBS,
        payload: data,
    };
};

export const setSelectedClubActionCreator = (data: selected): setSelectedClubAction => {
    return {
        type: SET_SELECTED_CLUB,
        payload: data,
    };
};
