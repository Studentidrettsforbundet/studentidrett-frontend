import { cityInterface } from '../../../interfaces';

export const SET_CITIES = 'SET_CITIES';
export const SET_SELECTED_CITY = 'SET_SELECTED_CITY';

interface setCitiesAction {
    type: typeof SET_CITIES;
    payload: cityInterface[];
}

interface setSelectedCityAction {
    type: typeof SET_SELECTED_CITY;
    payload: number;
}

export type cityActionTypes = setCitiesAction | setSelectedCityAction;

export const setRegionActionCreator = (data: cityInterface[]): setCitiesAction => {
    return {
        type: SET_CITIES,
        payload: data,
    };
};

export const setSelectedCityActionCreator = (data: number): setSelectedCityAction => {
    return {
        type: SET_SELECTED_CITY,
        payload: data,
    };
};
