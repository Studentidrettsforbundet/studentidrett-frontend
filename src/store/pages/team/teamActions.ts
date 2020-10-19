import { teamInterface } from '../../../interfaces';
import { instanceOfTeam } from '../../../services/interfaceValidators';

export const SET_TEAMS = 'SET_TEAMS';

interface setTeamsAction {
    type: typeof SET_TEAMS;
    payload: teamInterface[];
}

export type teamActionTypes = setTeamsAction;

export const setTeamsActionCreator = (data: teamInterface[]): teamActionTypes => {
    if (data.every(instanceOfTeam)) {
        return {
            type: SET_TEAMS,
            payload: data,
        };
    }

    return {
        type: SET_TEAMS,
        payload: [],
    };
};
