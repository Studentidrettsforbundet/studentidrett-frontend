import fetchMock from 'fetch-mock';
import { CLUB, GROUP, SPORT, TEAM } from '../../constants';
import { fetchDetailThunk } from '../../services/api';
import { urlBuilderFetchDetail } from '../../services/urlBuilders';
import { FETCH_FAILED, FETCH_IN_PROGRESS, FETCH_SUCCESS } from '../../store/thunks/thunkActions';

import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { SET_CLUBS_DETAIL } from '../../store/pages/club/clubActions';
import { SET_GROUPS_DETAIL } from '../../store/pages/group/groupActions';
import { SET_SPORTS_DETAIL } from '../../store/pages/sport/sportActions';
import { SET_TEAMS_DETAIL } from '../../store/pages/team/teamActions';
import { singleClub, singleGroup, singleSport, singleTeam } from '../../assets/testMock';

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
        const mockData = singleClub;

        const url = urlBuilderFetchDetail(CLUB, mockData.id.toString());
        fetchMock.mock(url, { body: mockData, status: 200 });

        const expected = [
            { type: FETCH_IN_PROGRESS },
            { type: FETCH_SUCCESS},
            { type: SET_CLUBS_DETAIL, payload: mockData },
        ];c

        store.dispatch<any>(fetchDetailThunk(CLUB, mockData.id.toString())).then(() => {
            const performedActions = store.getActions();
            expect(performedActions).toEqual(expected);
        });
    });

    test('Check dispatching when api returns error', async () => {
        const mockData = singleClub;

        const url = urlBuilderFetchDetail(CLUB, mockData.id.toString());
        fetchMock.mock(url, { body: mockData, status: 404 });

        const expected = [
            { type: FETCH_IN_PROGRESS },
            { type: FETCH_FAILED },
            { type: SET_CLUBS_DETAIL, payload: null },
        ];

        store.dispatch<any>(fetchDetailThunk(CLUB, mockData.id.toString())).then(() => {
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
        const mockData = singleClub;

        const url = urlBuilderFetchDetail(CLUB, mockData.id.toString());
        fetchMock.mock(url, { body: mockData, status: 200 });

        const expected = [
            { type: FETCH_IN_PROGRESS },
            { type: FETCH_SUCCESS},
            { type: SET_CLUBS_DETAIL, payload: mockData },
        ];

        store.dispatch<any>(fetchDetailThunk(CLUB, mockData.id.toString())).then(() => {
            const performedActions = store.getActions();
            expect(performedActions).toEqual(expected);
        });
    });

    test('GROUP: Check if the correct actions are dispatched', async () => {
        const mockData = singleGroup;

        const url = urlBuilderFetchDetail(GROUP, mockData.id.toString());
        fetchMock.mock(url, { body: mockData, status: 200 });

        const expected = [
            { type: FETCH_IN_PROGRESS },
            { type: FETCH_SUCCESS },
            { type: SET_GROUPS_DETAIL, payload: mockData },
        ];

        store.dispatch<any>(fetchDetailThunk(GROUP, mockData.id.toString())).then(() => {
            const performedActions = store.getActions();
            expect(performedActions).toEqual(expected);
        });
    });

    test('SPORTS: Check if the correct actions are dispatched', async () => {
        const mockData = singleSport;

        const url = urlBuilderFetchDetail(SPORT, mockData.id.toString());
        fetchMock.mock(url, { body: mockData, status: 200 });

        const expected = [
            { type: FETCH_IN_PROGRESS },
            { type: FETCH_SUCCESS},
            { type: SET_SPORTS_DETAIL, payload: mockData },
        ];

        store.dispatch<any>(fetchDetailThunk(SPORT, mockData.id.toString())).then(() => {
            const performedActions = store.getActions();
            expect(performedActions).toEqual(expected);
        });
    });

    test('TEAM: Check if the correct actions are dispatched', async () => {
        const mockData = singleTeam;

        const url = urlBuilderFetchDetail(TEAM, mockData.id.toString());
        fetchMock.mock(url, { body: mockData, status: 200 });

        const expected = [
            { type: FETCH_IN_PROGRESS },
            { type: FETCH_SUCCESS},
            { type: SET_TEAMS_DETAIL, payload: mockData },
        ];

        store.dispatch<any>(fetchDetailThunk(TEAM, mockData.id.toString())).then(() => {
            const performedActions = store.getActions();
            expect(performedActions).toEqual(expected);
        });
    });
});
