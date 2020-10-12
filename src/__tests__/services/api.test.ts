import fetchMock from 'fetch-mock';
import { error } from 'console';
import { fetchData, simpleSearch } from '../../services/api';
import { urlBuilderFetchData, urlBuilderSimpleSearch } from '../../services/urlBuilders';
import { cityInterface, sportInterface, regionInterface, teamInterface, clubInterface, groupInterface } from '../../interfaces';

// This test need libraries node-fetch and fetch-mock installed
describe('simpleSearch whitebox test with "fetch-mock"', () => {
    beforeEach(() => {
        fetchMock.restore();
    })

    test('Valid Fetch (Fetches one sport)', async () => {
        const mockData = {
            count: 1,
            next: null,
            previous: null,
            results: Array<sportInterface>(),
        };
        fetchMock.mock(urlBuilderSimpleSearch("sports", "fotball" ), { body: mockData, status: 200 });
        const res = await simpleSearch("fotball","sports");
        expect(res).toEqual(mockData);
        
    });

    test('Returns empty object when status != 200', async () => {
        const mockData = {
            count: 0,
            next: null,
            previous: null,
            results: [],
        };
        fetchMock.mock(urlBuilderSimpleSearch("cities", "sasdas"), { status: 404 });
        const res = await simpleSearch("sasdas", "cities");
        expect(res).toEqual(mockData);
        expect(res.results).toEqual(mockData.results)
    });

    test('Returns "Connection error" when fetch returns error', async () => {
        fetchMock.mock(urlBuilderSimpleSearch("clubs", "NTNUI"), error)
        const res = await simpleSearch("NTNUI","clubs");
        expect(res).toEqual("Connection error");
    });

});

describe('fetchData Whitebox test with fetchMock', () => {
    beforeEach(() => {
        fetchMock.restore();   
    })
   
    test('Valid Fetch (Fetches one city)', async () => {
        const mockData = {
            count: 1,
            next: null,
            previous: null,
            results: Array<cityInterface>(),
        };
        fetchMock.mock(urlBuilderFetchData("groups"), { body: mockData, status: 200 });
        const res = await fetchData("groups");
        expect(res).toEqual(mockData);
    });

    test('Returns empty object when status != 200', async () => {
        const mockData = {
            count: 0,
            next: null,
            previous: null,
            results: [],
        };
        fetchMock.mock(urlBuilderFetchData("regions"), { status: 404 });
        const res = await fetchData("regions");
        expect(res).toEqual(mockData);
    });

    test('Returns "Connection error" when fetch returns error', async () => {
        fetchMock.mock(urlBuilderFetchData("teams"), error)
        const res = await fetchData("teams");
        expect(res).toEqual("Connection error");
    });
});

describe('fetchData for all card types ', () => {
    beforeEach(() => {
        fetchMock.restore();
    })

    test('Valid Fetch for card CLUB', async () => {
        const mockData = {
            count: 1,
            next: null,
            previous: null,
            results: Array<clubInterface>(),
        };
        fetchMock.mock(urlBuilderFetchData("clubs"), { body: mockData, status: 200 });
        const res = await fetchData("clubs");
        expect(res).toEqual(mockData);
    });

    test('Valid Fetch for card SPORT', async () => {
        const mockData = {
            count: 1,
            next: null,
            previous: null,
            results: Array<sportInterface>(),
        };
        fetchMock.mock(urlBuilderFetchData("sports"), { body: mockData, status: 200 });
        const res = await fetchData("sports");
        expect(res).toEqual(mockData);
    });

    test('Valid Fetch for card TEAM', async () => {
        const mockData = {
            count: 1,
            next: null,
            previous: null,
            results: Array<teamInterface>(),
        };
        fetchMock.mock(urlBuilderFetchData("teams"), { body: mockData, status: 200 });
        const res = await fetchData("teams");
        expect(res).toEqual(mockData);
    });

    test('Valid Fetch for card REGION', async () => {
        const mockData = {
            count: 1,
            next: null,
            previous: null,
            results: Array <regionInterface> (),
        };
        fetchMock.mock(urlBuilderFetchData("regions"), { body: mockData, status: 200 });
        const res = await fetchData("regions");
        expect(res).toEqual(mockData);
    });

    test('Valid Fetch for card CITY', async () => {
        const mockData = {
            count: 1,
            next: null,
            previous: null,
            results: Array<cityInterface>(),
        };
        fetchMock.mock(urlBuilderFetchData("cities"), { body: mockData, status: 200 });
        const res = await fetchData("cities");
        expect(res).toEqual(mockData);
    });

    test('Valid Fetch for card GROUP', async () => {
        const mockData = {
            count: 1,
            next: null,
            previous: null,
            results: Array<groupInterface>(),
        };
        fetchMock.mock(urlBuilderFetchData("groups"), { body: mockData, status: 200 });
        const res = await fetchData("groups");
        expect(res).toEqual(mockData);
    });

});
