import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { cityInitialState, cityReducer, cityState } from './pages/city/cityReducer';
import { clubInitialState, clubReducer, clubDetailReducer, clubState } from './pages/club/clubReducer';
import { groupInitialState, groupReducer, groupDetailReducer, groupState } from './pages/group/groupReducer';
import { regionInitialState, regionReducer, regionState } from './pages/region/regionReducer';
import { sportInitialState, sportReducer, sportDetailReducer, sportState } from './pages/sport/sportReducer';
import { teamInitialState, teamReducer, teamDetailReducer, teamState } from './pages/team/teamReducer';
import { searchBarInitialState, searchBarReducer, searchBarState } from './searchBar/searchBarReducer';
import { thunkInitialState, thunkReducer, thunkState } from './thunks/thunkReducer';

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
    sport_detail: sportState;
    club: clubState;
    club_detail: clubState;
    team: teamState;
    team_detail: teamState;
    group: groupState;
    group_detail: groupState;
    thunk: thunkState;
    searchBar: searchBarState;
}

// TODO: add all pages state here
export const combinedState = {
    region: regionInitialState,
    city: cityInitialState,
    sport: sportInitialState,
    sport_detail: sportInitialState,
    club: clubInitialState,
    club_detail: clubInitialState,
    team: teamInitialState,
    team_detail: teamInitialState,
    group: groupInitialState,
    group_detail: groupInitialState,
    thunk: thunkInitialState,
    searchBar: searchBarInitialState,
};

// create store
const store = createStore(
    combineReducers({
        region: regionReducer,
        city: cityReducer,
        sport: sportReducer,
        sport_detail: sportDetailReducer,
        club: clubReducer,
        club_detail: clubDetailReducer,
        team: teamReducer,
        team_detail: teamDetailReducer,
        group: groupReducer,
        group_detail: groupDetailReducer,
        thunk: thunkReducer,
        searchBar: searchBarReducer,
    }),
    combinedState,
    composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
