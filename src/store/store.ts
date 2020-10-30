import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { cityInitialState, cityReducer, cityState } from './pages/city/cityReducer';
import { clubInitialState, clubReducer, clubState } from './pages/club/clubReducer';
import { groupInitialState, groupReducer, groupState } from './pages/group/groupReducer';
import { regionInitialState, regionReducer, regionState } from './pages/region/regionReducer';
import { sportInitialState, sportReducer, sportState } from './pages/sport/sportReducer';
import { teamInitialState, teamReducer, teamState } from './pages/team/teamReducer';
import { searchBarInitialState, searchBarReducer, searchBarState } from './searchBar/searchBarReducer';
import { thunkInitialState, thunkReducer, thunkState } from './thunks/thunkReducer';
import { searchInitialState, searchReducer, searchState } from "./pages/search/searchReducer";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//TODO: add reducers interfaces
export interface combinedStateInterface {
    region: regionState;
    city: cityState;
    sport: sportState;
    club: clubState;
    team: teamState;
    group: groupState;
    search_results: searchState;
    thunk: thunkState;
    searchBar: searchBarState;
}

// TODO: add all pages state here
export const combinedState = {
    region: regionInitialState,
    city: cityInitialState,
    sport: sportInitialState,
    club: clubInitialState,
    team: teamInitialState,
    group: groupInitialState,
    search_results: searchInitialState,
    thunk: thunkInitialState,
    searchBar: searchBarInitialState,
};

// create store
const store = createStore(
    combineReducers({
        region: regionReducer,
        city: cityReducer,
        sport: sportReducer,
        club: clubReducer,
        team: teamReducer,
        group: groupReducer,
        search_results: searchReducer,
        thunk: thunkReducer,
        searchBar: searchBarReducer,
    }),
    combinedState,
    composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
