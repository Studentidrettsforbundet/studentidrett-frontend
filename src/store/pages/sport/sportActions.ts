import { sportInterface } from '../../../interfaces';
import { instanceOfSport } from '../../../services/interfaceValidators';

export const SET_SPORTS = 'SET_SPORTS';
export const SET_SPORTS_DETAIL  = 'SET_SPORTS_DETAIL';

interface setSportsDetailAction {
    type: typeof SET_SPORTS_DETAIL;
    payload: sportInterface;
}

interface setSportsAction {
    type: typeof SET_SPORTS;
    payload: sportInterface[];
}

export type sportActionTypes = setSportsAction | setSportsDetailAction;

export const setSportsActionCreator = (data: sportInterface[]): sportActionTypes => {
    if (data.every(instanceOfSport)) {
        return {
            type: SET_SPORTS,
            payload: data,
        };
    }
    return {
        type: SET_SPORTS,
        payload: [],
    };
};

export const setSportsActionDetailCreator = (data: sportInterface): sportActionTypes => {
    return {
        type: SET_SPORTS_DETAIL,
        payload: data,
    };
};
