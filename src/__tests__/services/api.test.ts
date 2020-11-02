import fetchMock from 'fetch-mock';
import { error } from 'console';
import { checkForErrorCodes, fetchData } from '../../services/api';
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
            next: null,
            previous: null,
            results: Array<cityInterface>(),
        };
        const url = urlBuilderFetchData(CITY);
        fetchMock.mock(url, { body: mockData, status: 200 });
        const res = await fetchData(url);
        expect(res).toEqual(mockData);
    });

    test('Returns empty object when status != 200', async () => {
        const url = urlBuilderFetchData(TEAM);
        fetchMock.mock(url, { status: 404 });
        const res = await fetchData(url);
        expect(res).toEqual('Something went wrong');
    });

    test('Returns "Connection error" when fetch returns error', async () => {
        const url = urlBuilderFetchData(REGION);
        fetchMock.mock(url, error);
        const res = await fetchData(url);
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
        const url = urlBuilderFetchData(CLUB);
        fetchMock.mock(url, { body: mockData, status: 200 });
        const res = await fetchData(url);
        expect(res).toEqual(mockData);
    });

    test('Valid Fetch for card SPORT', async () => {
        const mockData = {
            count: 1,
            next: null,
            previous: null,
            results: Array<sportInterface>(),
        };
        const url = urlBuilderFetchData(SPORT);
        fetchMock.mock(url, { body: mockData, status: 200 });
        const res = await fetchData(url);
        expect(res).toEqual(mockData);
    });

    test('Valid Fetch for card TEAM', async () => {
        const mockData = {
            count: 1,
            next: null,
            previous: null,
            results: Array<teamInterface>(),
        };
        const url = urlBuilderFetchData(TEAM);
        fetchMock.mock(url, { body: mockData, status: 200 });
        const res = await fetchData(url);
        expect(res).toEqual(mockData);
    });

    test('Valid Fetch for card REGION', async () => {
        const mockData = {
            count: 1,
            next: null,
            previous: null,
            results: Array<regionInterface>(),
        };
        const url = urlBuilderFetchData(REGION);
        fetchMock.mock(url, { body: mockData, status: 200 });
        const res = await fetchData(url);
        expect(res).toEqual(mockData);
    });

    test('Valid Fetch for card CITY', async () => {
        const mockData = {
            count: 1,
            next: null,
            previous: null,
            results: Array<cityInterface>(),
        };
        const url = urlBuilderFetchData(CITY);
        fetchMock.mock(url, { body: mockData, status: 200 });
        const res = await fetchData(url);
        expect(res).toEqual(mockData);
    });

    test('Valid Fetch for card GROUP', async () => {
        const mockData = {
            count: 1,
            next: null,
            previous: null,
            results: Array<groupInterface>(),
        };
        const url = urlBuilderFetchData(GROUP);
        fetchMock.mock(url, { body: mockData, status: 200 });
        const res = await fetchData(url);
        expect(res).toEqual(mockData);
    });
});

describe('checkForErrorCodes', () => {
    test('Should return false', async () => {
        expect(checkForErrorCodes({ status: 200 })).toEqual(false);
    });

    test('Should return true', async () => {
        expect(checkForErrorCodes({ status: 199 })).toEqual(true);
        expect(checkForErrorCodes({ status: 201 })).toEqual(true);
        expect(checkForErrorCodes({ status: 0 })).toEqual(true);
        expect(checkForErrorCodes({ status: -10 })).toEqual(true);
        expect(checkForErrorCodes({ status: 13.9 })).toEqual(true);
        expect(checkForErrorCodes({ status: 200.7 })).toEqual(true);
        expect(checkForErrorCodes({})).toEqual(true);
    });
});
