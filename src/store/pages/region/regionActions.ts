import { regionInterface } from '../../../interfaces';

export const SET_REGIONS = 'SET_REGIONS';

interface setRegionsAction {
    type: typeof SET_REGIONS;
    payload: regionInterface[];
}

export type regionActionTypes = setRegionsAction;

export const setRegionActionCreator = (data: regionInterface[]): setRegionsAction => {
    return {
        type: SET_REGIONS,
        payload: data,
    };
};
