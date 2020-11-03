import { teamInterface } from '../../../interfaces';
import { instanceOfTeam } from '../../../services/interfaceValidators';

export const SET_TEAMS = 'SET_TEAMS';
export const SET_TEAMS_DETAIL = 'SET_TEAMS_DETAIL';

interface setTeamsAction {
    type: typeof SET_TEAMS;
    payload: teamInterface[];
}

interface setTeamsActionDetail {
    type: typeof SET_TEAMS_DETAIL;
    payload: teamInterface;
}

export type teamActionTypes = setTeamsAction | setTeamsActionDetail;

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

export const setTeamsActionDetailCreator = (data: teamInterface): teamActionTypes => {
    return {
        type: SET_TEAMS_DETAIL,
        payload: data,
    };
};
