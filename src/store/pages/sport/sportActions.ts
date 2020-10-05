import { selected, sportInterface } from '../../../interfaces';

export const SET_SPORTS = 'SET_SPORTS';

interface setSportsAction {
    type: typeof SET_SPORTS;
    payload: sportInterface[];
}

export type sportActionTypes = setSportsAction;

export const setSportsActionCreator = (data: sportInterface[]): sportActionTypes => {
    return {
        type: SET_SPORTS,
        payload: data,
    };
};
