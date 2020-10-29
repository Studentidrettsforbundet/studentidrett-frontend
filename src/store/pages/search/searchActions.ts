import { searchInterface } from '../../../interfaces';

export const SET_SEARCH = 'SET_SEARCH';

interface setSearchAction {
    type: typeof SET_SEARCH;
    payload: searchInterface[];
}

export type searchActionTypes = setSearchAction;

export const setSearchActionCreator = (data: searchInterface[]): searchActionTypes => {
    return {
        type: SET_SEARCH,
        payload: data,
    };
};
