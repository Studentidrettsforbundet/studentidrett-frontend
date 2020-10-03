import { $CombinedState, combineReducers, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cityInitialState, cityReducer, cityState } from './pages/city/cityReducer';
import { clubInitialState, clubReducer, clubState } from './pages/club/clubReducer';
import { regionInitialState, regionReducer, regionState } from './pages/region/regionReducer';
import { searchbarInitialState, searchBarReducer, searchBarState } from './pages/searcBar/searchBarReducer';
import { sportInitialState, sportReducer, sportState } from './pages/sport/sportReducer';
import { teamInitialState, teamReducer, teamState } from './pages/team/teamReducer';

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
    city: cityState;
    sport: sportState;
    club: clubState;
    team: teamState;
}

// TODO: add all pages state here
export const combinedState = {
    searchBar: searchbarInitialState,
    region: regionInitialState,
    city: cityInitialState,
    sport: sportInitialState,
    club: clubInitialState,
    team: teamInitialState,
};

// create store
const store = createStore(
    combineReducers({
        searchBar: searchBarReducer,
        region: regionReducer,
        city: cityReducer,
        sport: sportReducer,
        club: clubReducer,
        team: teamReducer,
    }),
    combinedState,
    composeWithDevTools(),
);

export default store;
