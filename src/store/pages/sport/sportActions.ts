import { selected, sportInterface } from '../../../interfaces';

export const SET_SPORTS = 'SET_SPORTS';
export const SET_SELECTED_SPORT = 'SET_SELECTED_SPORT';

interface setSportsAction {
    type: typeof SET_SPORTS;
    payload: sportInterface[];
}

interface setSelectedSportsAction {
    type: typeof SET_SELECTED_SPORT;
    payload: selected;
}

export type sportActionTypes = setSportsAction | setSelectedSportsAction;

export const setSportsActionCreator = (data: sportInterface[]): sportActionTypes => {
    return {
        type: SET_SPORTS,
        payload: data,
    };
};

export const setSelectedSportActionCreator = ({ id, name }: selected): setSelectedSportsAction => {
    return {
        type: SET_SELECTED_SPORT,
        payload: { id: id, name: name },
    };
};
