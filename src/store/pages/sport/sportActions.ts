import { sportInterface } from '../../../interfaces';
import { instanceOfSport } from '../../../services/interfaceValidators';

export const SET_SPORTS = 'SET_SPORTS';

interface setSportsAction {
    type: typeof SET_SPORTS;
    payload: sportInterface[];
}

export type sportActionTypes = setSportsAction;

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
