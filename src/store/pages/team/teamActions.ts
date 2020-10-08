import { teamInterface } from '../../../interfaces';

export const SET_TEAMS = 'SET_TEAMS';

interface setTeamsAction {
    type: typeof SET_TEAMS;
    payload: teamInterface[];
}

export type teamActionTypes = setTeamsAction;

export const setTeamsActionCreator = (data: teamInterface[]): teamActionTypes => {
    return {
        type: SET_TEAMS,
        payload: data,
    };
};
