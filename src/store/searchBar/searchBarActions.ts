export const TOGGLE_SEARCHBAR = 'TOGGLE_SEARCHBAR';

interface toggleSearchBarAction {
    type: typeof TOGGLE_SEARCHBAR;
    payload: boolean;
}

export type searchBarActionTypes = toggleSearchBarAction;

export const toggleSearchBarActionCreator = (state: boolean): toggleSearchBarAction => {
    return {
        type: TOGGLE_SEARCHBAR,
        payload: state,
    };
};
