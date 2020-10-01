import { $CombinedState, combineReducers, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { regionInitialState, regionReducer, regionState } from './pages/region/regionReducer';
import { searchbarInitialState, searchBarReducer, searchBarState } from './pages/searcBar/searchBarReducer';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//TODO: add reducers interfaces
export interface combinedState {
    searchBar: searchBarState;
    region: regionState;
}

// TODO: add all pages state here
export const combinedState = {
    searchBar: searchbarInitialState,
    region: regionInitialState,
};

// create store
const store = createStore(
    combineReducers({
        searchBar: searchBarReducer,
        region: regionReducer,
    }),
    combinedState,
    composeWithDevTools(),
);

export default store;
