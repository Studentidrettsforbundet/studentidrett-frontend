import { $CombinedState, combineReducers, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cityInitialState, cityReducer, cityState } from './pages/city/cityReducer';
import { clubInitialState, clubReducer, clubState } from './pages/club/clubReducer';
import { regionInitialState, regionReducer, regionState } from './pages/region/regionReducer';
import { searchbarInitialState, searchBarReducer, searchBarState } from './pages/searcBar/searchBarReducer';
import { sportInitialState, sportReducer, sportState } from './pages/sport/sportReducer';

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
}

// TODO: add all pages state here
export const combinedState = {
    searchBar: searchbarInitialState,
    region: regionInitialState,
    city: cityInitialState,
    sport: sportInitialState,
    club: clubInitialState,
};

// create store
const store = createStore(
    combineReducers({
        searchBar: searchBarReducer,
        region: regionReducer,
        city: cityReducer,
        sport: sportReducer,
        club: clubReducer,
    }),
    combinedState,
    composeWithDevTools(),
);

export default store;
