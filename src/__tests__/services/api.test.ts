import fetchMock from 'fetch-mock';
import { error } from 'console';
import { fetchData } from '../../services/api';
import { urlBuilderFetchData, urlBuilderSimpleSearch } from '../../services/urlBuilders';
import {
    cityInterface,
    sportInterface,
    regionInterface,
    teamInterface,
    clubInterface,
    groupInterface,
} from '../../interfaces';
import { CITY, CLUB, SPORT, GROUP, TEAM, REGION } from '../../constants';

/*
THIS IS WORK IN PROGRESS, AND WILL BE DONE IN THE BRANCH SIMPLESEARCH

// This test need libraries node-fetch and fetch-mock installed
describe('simpleSearch whitebox test with "fetch-mock"', () => {
    beforeEach(() => {
        fetchMock.restore();
    });

    test('Valid Fetch (Fetches one sport)', async () => {
        const mockData = {
            count: 1,
            next: null,
            previous: null,
            results: Array<sportInterface>(),
        };
        fetchMock.mock(urlBuilderSimpleSearch(SPORT, 'fotball'), { body: mockData, status: 200 });
        const res = await simpleSearch('fotball', SPORT);
        expect(res).toEqual(mockData);
    });

    test('Returns empty object when status != 200', async () => {
        fetchMock.mock(urlBuilderSimpleSearch(CITY, 'sasdas'), { status: 404 });
        const res = await simpleSearch('sasdas', CITY);
        expect(res).toEqual('Something went wrong');
    });

    test('Returns "Connection error" when fetch returns error', async () => {
        fetchMock.mock(urlBuilderSimpleSearch(CLUB, 'NTNUI'), error);
        const res = await simpleSearch('NTNUI', CLUB);
        expect(res).toEqual('Connection error');
    });
});

*/
describe('fetchData Whitebox test with fetchMock', () => {
    beforeEach(() => {
        fetchMock.restore();
    });

    test('Valid Fetch (Fetches one city)', async () => {
        const mockData = {
            count: 1,
            next: null,
            previous: null,
            results: Array<cityInterface>(),
        };
        fetchMock.mock(urlBuilderFetchData(GROUP), { body: mockData, status: 200 });
        const res = await fetchData(GROUP);
        expect(res).toEqual(mockData);
    });

    test('Returns empty object when status != 200', async () => {
        fetchMock.mock(urlBuilderFetchData(TEAM), { status: 404 });
        const res = await fetchData(TEAM);
        expect(res).toEqual('Something went wrong');
    });

    test('Returns "Connection error" when fetch returns error', async () => {
        fetchMock.mock(urlBuilderFetchData(REGION), error);
        const res = await fetchData(REGION);
        expect(res).toEqual('Connection error');
    });
});

describe('fetchData for all card types ', () => {
    beforeEach(() => {
        fetchMock.restore();
    });

    test('Valid Fetch for card CLUB', async () => {
        const mockData = {
            count: 1,
            next: null,
            previous: null,
            results: Array<clubInterface>(),
        };
        fetchMock.mock(urlBuilderFetchData(CLUB), { body: mockData, status: 200 });
        const res = await fetchData(CLUB);
        expect(res).toEqual(mockData);
    });

    test('Valid Fetch for card SPORT', async () => {
        const mockData = {
            count: 1,
            next: null,
            previous: null,
            results: Array<sportInterface>(),
        };
        fetchMock.mock(urlBuilderFetchData(SPORT), { body: mockData, status: 200 });
        const res = await fetchData(SPORT);
        expect(res).toEqual(mockData);
    });

    test('Valid Fetch for card TEAM', async () => {
        const mockData = {
            count: 1,
            next: null,
            previous: null,
            results: Array<teamInterface>(),
        };
        fetchMock.mock(urlBuilderFetchData(TEAM), { body: mockData, status: 200 });
        const res = await fetchData(TEAM);
        expect(res).toEqual(mockData);
    });

    test('Valid Fetch for card REGION', async () => {
        const mockData = {
            count: 1,
            next: null,
            previous: null,
            results: Array<regionInterface>(),
        };
        fetchMock.mock(urlBuilderFetchData(REGION), { body: mockData, status: 200 });
        const res = await fetchData(REGION);
        expect(res).toEqual(mockData);
    });

    test('Valid Fetch for card CITY', async () => {
        const mockData = {
            count: 1,
            next: null,
            previous: null,
            results: Array<cityInterface>(),
        };
        fetchMock.mock(urlBuilderFetchData(CITY), { body: mockData, status: 200 });
        const res = await fetchData(CITY);
        expect(res).toEqual(mockData);
    });

    test('Valid Fetch for card GROUP', async () => {
        const mockData = {
            count: 1,
            next: null,
            previous: null,
            results: Array<groupInterface>(),
        };
        fetchMock.mock(urlBuilderFetchData(GROUP), { body: mockData, status: 200 });
        const res = await fetchData(GROUP);
        expect(res).toEqual(mockData);
    });
});
