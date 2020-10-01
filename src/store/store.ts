import { $CombinedState, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { searchbarInitialState, searchBarReducer, searchBarState } from './pages/searcBar/searchBarReducer';

//TODO: add reducers interfaces
export interface combinedState {
    searchBar: searchBarState;
}

// TODO: add all pages state here
export const combinedState = {
    searchBar: searchbarInitialState,
};

// create store
const store = createStore(
    combineReducers({
        searchBar: searchBarReducer,
    }),
    combinedState,
    composeWithDevTools(),
);

export default store;
