export const TOGGLE_SEARCHBAR = 'TOGGLE_SEARCHBAR';

interface toggleSearchBarAction {
    type: typeof TOGGLE_SEARCHBAR;
}

export type searchBarActionTypes = toggleSearchBarAction;

export const toggleSearchBarActionCreator = (): toggleSearchBarAction => {
    return {
        type: TOGGLE_SEARCHBAR,
    };
};
