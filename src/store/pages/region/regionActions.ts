import { regionInterface, selected } from '../../../interfaces';

export const SET_REGIONS = 'SET_REGIONS';
export const SET_SELECTED_REGION = 'SET_SELECTED_REGION';

interface setRegionsAction {
    type: typeof SET_REGIONS;
    payload: regionInterface[];
}

interface setSelectedRegionsAction {
    type: typeof SET_SELECTED_REGION;
    payload: selected;
}

export type regionActionTypes = setRegionsAction | setSelectedRegionsAction;

export const setRegionActionCreator = (data: regionInterface[]): setRegionsAction => {
    return {
        type: SET_REGIONS,
        payload: data,
    };
};

export const setSelectedRegionActionCreator = ({ id, name }: selected): setSelectedRegionsAction => {
    return {
        type: SET_SELECTED_REGION,
        payload: {
            id: id,
            name: name,
        },
    };
};
