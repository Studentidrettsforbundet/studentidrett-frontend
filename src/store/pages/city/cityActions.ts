import { cityInterface } from '../../../interfaces';
import { instanceOfCity } from '../../../services/interfaceValidators';

export const SET_CITIES = 'SET_CITIES';

interface setCitiesAction {
    type: typeof SET_CITIES;
    payload: cityInterface[];
}

export type cityActionTypes = setCitiesAction;

export const setCitiesActionCreator = (data: cityInterface[]): setCitiesAction => {
    if (data.every(instanceOfCity)) {
        return {
            type: SET_CITIES,
            payload: data,
        };
    }

    return {
        type: SET_CITIES,
        payload: [],
    };
};
