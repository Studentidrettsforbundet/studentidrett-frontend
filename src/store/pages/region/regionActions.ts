import { regionInterface } from '../../../interfaces';
import { instanceOfRegion } from '../../../services/interfaceValidators';

export const SET_REGIONS = 'SET_REGIONS';

interface setRegionsAction {
    type: typeof SET_REGIONS;
    payload: regionInterface[];
}

export type regionActionTypes = setRegionsAction;

export const setRegionsActionCreator = (data: regionInterface[]): setRegionsAction => {
    if (data.every(instanceOfRegion)) {
        return {
            type: SET_REGIONS,
            payload: data,
        };
    }
    return {
        type: SET_REGIONS,
        payload: [],
    };
};
