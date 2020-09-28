import { combineReducers, createStore } from 'redux';

export interface combinedState {
    //TODO: add reducers interfaces
}

const store = createStore<combinedState, any, any, any>(
    combineReducers({
        //TODO: add reducers
    }),
);
export default store;
