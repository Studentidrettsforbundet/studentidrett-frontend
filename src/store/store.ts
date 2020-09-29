import { $CombinedState, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { searchBarReducer } from './pages/searcBar/searchBarReducer';

export interface combinedState {
    //TODO: add reducers interfaces
}

// Comnined InitialState
export const combinedState = {};

// create store
const store = createStore(
    combineReducers({
        searchBar: searchBarReducer,
    }),
    combinedState,
    composeWithDevTools(),
);

export default store;
