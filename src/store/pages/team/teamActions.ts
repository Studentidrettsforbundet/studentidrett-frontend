import { selected, teamInterface } from '../../../interfaces';

export const SET_TEAMS = 'SET_TEAMS';
export const SET_SELECTED_TEAM = 'SET_SELECTED_TEAMS';

interface setTeamsAction {
    type: typeof SET_TEAMS;
    payload: teamInterface[];
}

interface setSelectedTeamsAction {
    type: typeof SET_SELECTED_TEAM;
    payload: selected;
}

export type teamActionTypes = setTeamsAction | setSelectedTeamsAction;

export const setTeamsActionCreator = (data: teamInterface[]): teamActionTypes => {
    return {
        type: SET_TEAMS,
        payload: data,
    };
};

export const setSelectedTeamActionCreator = ({ id, name }: selected): setSelectedTeamsAction => {
    return {
        type: SET_SELECTED_TEAM,
        payload: { id: id, name: name },
    };
};
