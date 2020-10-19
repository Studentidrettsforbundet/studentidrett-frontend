import fetchMock from 'fetch-mock';
import { CITY, CLUB, GROUP, REGION, SPORT, TEAM } from '../../constants';
import {
    cityInterface,
    clubInterface,
    groupInterface,
    regionInterface,
    sportInterface,
    teamInterface,
} from '../../interfaces';
import { fetchDataThunk } from '../../services/api';
import { urlBuilderFetchData } from '../../services/urlBuilders';
import { SET_CLUBS } from '../../store/pages/club/clubActions';
import store from '../../store/store';
import { FETCH_FAILED, FETCH_IN_PROGRESS, FETCH_SUCCESS } from '../../store/thunks/thunkActions';

import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { SET_CITIES } from '../../store/pages/city/cityActions';
import { SET_GROUPS } from '../../store/pages/group/groupActions';
import { SET_REGIONS } from '../../store/pages/region/regionActions';
import { SET_SPORTS } from '../../store/pages/sport/sportActions';
import { SET_TEAMS } from '../../store/pages/team/teamActions';

export const startState = {}; //put initial state here

export const mockStore = configureMockStore([thunk]);

export const makeMockStore = (state = {}) => {
    return mockStore({
        ...startState,
        ...state,
    });
};

describe('Successfull CARDTYPE fetch', () => {
    const store = makeMockStore();
    beforeEach(() => {
        fetchMock.restore();
        store.clearActions();
    });

    afterEach(() => {
        fetchMock.reset();
    });

    test('Check if the correct actions are dispatched ', async () => {
        const mockData = {
            count: 1,
            next: null,
            previous: null,
            results: Array<clubInterface>(),
        };

        const url = urlBuilderFetchData(CLUB);
        fetchMock.mock(url, { body: mockData, status: 200 });

        const expected = [
            { type: FETCH_IN_PROGRESS },
            { type: FETCH_SUCCESS, payload: { next: mockData.next, previous: mockData.previous } },
            { type: SET_CLUBS, payload: mockData.results },
        ];

        store.dispatch<any>(fetchDataThunk(CLUB)).then(() => {
            const performedActions = store.getActions();
            expect(performedActions).toEqual(expected);
        });
    });

    test('Check dispatching when api returns error', async () => {
        const mockData = {
            count: 1,
            next: null,
            previous: null,
            results: Array<clubInterface>(),
        };

        const url = urlBuilderFetchData(CLUB);
        fetchMock.mock(url, { body: mockData, status: 404 });

        const expected = [{ type: FETCH_IN_PROGRESS }, { type: FETCH_FAILED }, { type: SET_CLUBS, payload: [] }];

        store.dispatch<any>(fetchDataThunk(CLUB)).then(() => {
            const performedActions = store.getActions();
            expect(performedActions).toEqual(expected);
        });
    });
});

describe('Successfull URL fetch', () => {
    const store = makeMockStore();
    beforeEach(() => {
        fetchMock.restore();
        store.clearActions();
    });

    afterEach(() => {
        fetchMock.reset();
    });

    test('Check if the correct actions are dispatched ', async () => {
        const mockData = {
            count: 1,
            next: null,
            previous: null,
            results: Array<clubInterface>(),
        };

        const url = 'https://randomURL.com/spcialURL=?testdata/data';
        fetchMock.mock(url, { body: mockData, status: 200 });

        const expected = [
            { type: FETCH_IN_PROGRESS },
            { type: FETCH_SUCCESS, payload: { next: mockData.next, previous: mockData.previous } },
            { type: SET_CLUBS, payload: mockData.results },
        ];

        store.dispatch<any>(fetchDataThunk(CLUB, url)).then(() => {
            const performedActions = store.getActions();
            expect(performedActions).toEqual(expected);
        });
    });
});

describe('Check all cardtypes', () => {
    const store = makeMockStore();
    beforeEach(() => {
        fetchMock.restore();
        store.clearActions();
    });

    afterEach(() => {
        fetchMock.reset();
    });

    test('CLUB: Check if the correct actions are dispatched', async () => {
        const mockData = {
            count: 1,
            next: null,
            previous: null,
            results: Array<clubInterface>(),
        };

        const url = urlBuilderFetchData(CLUB);
        fetchMock.mock(url, { body: mockData, status: 200 });

        const expected = [
            { type: FETCH_IN_PROGRESS },
            { type: FETCH_SUCCESS, payload: { next: mockData.next, previous: mockData.previous } },
            { type: SET_CLUBS, payload: mockData.results },
        ];

        store.dispatch<any>(fetchDataThunk(CLUB)).then(() => {
            const performedActions = store.getActions();
            expect(performedActions).toEqual(expected);
        });
    });

    test('CITY: Check if the correct actions are dispatched', async () => {
        const mockData = {
            count: 1,
            next: null,
            previous: null,
            results: Array<cityInterface>(),
        };

        const url = urlBuilderFetchData(CITY);
        fetchMock.mock(url, { body: mockData, status: 200 });

        const expected = [
            { type: FETCH_IN_PROGRESS },
            { type: FETCH_SUCCESS, payload: { next: mockData.next, previous: mockData.previous } },
            { type: SET_CITIES, payload: mockData.results },
        ];

        store.dispatch<any>(fetchDataThunk(CITY)).then(() => {
            const performedActions = store.getActions();
            expect(performedActions).toEqual(expected);
        });
    });

    test('GROUP: Check if the correct actions are dispatched', async () => {
        const mockData = {
            count: 1,
            next: null,
            previous: null,
            results: Array<groupInterface>(),
        };

        const url = urlBuilderFetchData(GROUP);
        fetchMock.mock(url, { body: mockData, status: 200 });

        const expected = [
            { type: FETCH_IN_PROGRESS },
            { type: FETCH_SUCCESS, payload: { next: mockData.next, previous: mockData.previous } },
            { type: SET_GROUPS, payload: mockData.results },
        ];

        store.dispatch<any>(fetchDataThunk(GROUP)).then(() => {
            const performedActions = store.getActions();
            expect(performedActions).toEqual(expected);
        });
    });

    test('REGION: Check if the correct actions are dispatched', async () => {
        const mockData = {
            count: 1,
            next: null,
            previous: null,
            results: Array<regionInterface>(),
        };

        const url = urlBuilderFetchData(REGION);
        fetchMock.mock(url, { body: mockData, status: 200 });

        const expected = [
            { type: FETCH_IN_PROGRESS },
            { type: FETCH_SUCCESS, payload: { next: mockData.next, previous: mockData.previous } },
            { type: SET_REGIONS, payload: mockData.results },
        ];

        store.dispatch<any>(fetchDataThunk(REGION)).then(() => {
            const performedActions = store.getActions();
            expect(performedActions).toEqual(expected);
        });
    });

    test('SPORTS: Check if the correct actions are dispatched', async () => {
        const mockData = {
            count: 1,
            next: null,
            previous: null,
            results: Array<sportInterface>(),
        };

        const url = urlBuilderFetchData(SPORT);
        fetchMock.mock(url, { body: mockData, status: 200 });

        const expected = [
            { type: FETCH_IN_PROGRESS },
            { type: FETCH_SUCCESS, payload: { next: mockData.next, previous: mockData.previous } },
            { type: SET_SPORTS, payload: mockData.results },
        ];

        store.dispatch<any>(fetchDataThunk(SPORT)).then(() => {
            const performedActions = store.getActions();
            expect(performedActions).toEqual(expected);
        });
    });

    test('TEAM: Check if the correct actions are dispatched', async () => {
        const mockData = {
            count: 1,
            next: null,
            previous: null,
            results: Array<teamInterface>(),
        };

        const url = urlBuilderFetchData(TEAM);
        fetchMock.mock(url, { body: mockData, status: 200 });

        const expected = [
            { type: FETCH_IN_PROGRESS },
            { type: FETCH_SUCCESS, payload: { next: mockData.next, previous: mockData.previous } },
            { type: SET_TEAMS, payload: mockData.results },
        ];

        store.dispatch<any>(fetchDataThunk(TEAM)).then(() => {
            const performedActions = store.getActions();
            expect(performedActions).toEqual(expected);
        });
    });

    test('Illegal data: Check if the correct actions are dispatched', async () => {
        const mockData = {
            count: 1,
            next: null,
            previous: null,
            results: [],
        };

        const url = urlBuilderFetchData({});
        fetchMock.mock(url, { body: mockData, status: 200 });

        const expected = [
            { type: FETCH_IN_PROGRESS },
            { type: FETCH_SUCCESS, payload: { next: mockData.next, previous: mockData.previous } },
        ];

        store.dispatch<any>(fetchDataThunk({})).then(() => {
            const performedActions = store.getActions();
            expect(performedActions).toEqual(expected);
        });
    });
});
