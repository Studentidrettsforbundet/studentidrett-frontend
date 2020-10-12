import fetchMock from 'fetch-mock';
import { error } from 'console';
import { fetchData, simpleSearch } from '../../services/api';
import { urlBuilderFetchData, urlBuilderSimpleSearch } from '../../services/urlBuilders';
import { cityInterface, sportInterface } from '../../interfaces';
import { CITY, CLUB, SPORT } from '../../constants';

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
        fetchMock.mock(urlBuilderSimpleSearch(SPORT, "fotball" ), { body: mockData, status: 200 });
        const res = await simpleSearch("fotball",SPORT);
        expect(res).toEqual(mockData);
        
    });

    test('Returns empty object when status != 200', async () => {
        const mockData = {
            count: 0,
            next: null,
            previous: null,
            results: [],
        };
        fetchMock.mock(urlBuilderSimpleSearch("sports", "sasdas"), { status: 404 });
        const res = await simpleSearch("sasdas","sports");
        expect(res).toEqual(mockData);
        expect(res.results).toEqual(mockData.results)
    });

    test('Returns "Connection error" when fetch returns error', async () => {
        fetchMock.mock(urlBuilderSimpleSearch(CLUB, "NTNUI"), error)
        const res = await simpleSearch("NTNUI",CLUB);
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
        fetchMock.mock(urlBuilderFetchData(CITY), { body: mockData, status: 200 });
        const res = await fetchData(CITY);
        expect(res).toEqual(mockData);
    });

    test('Returns empty object when status != 200', async () => {
        const mockData = {
            count: 0,
            next: null,
            previous: null,
            results: [],
        };
        fetchMock.mock(urlBuilderFetchData(SPORT), { status: 404 });
        const res = await fetchData(SPORT);
        expect(res).toEqual(mockData);
    });

    test('Returns "Connection error" when fetch returns error', async () => {
        fetchMock.mock(urlBuilderFetchData(CLUB), error)
        const res = await fetchData(CLUB);
        expect(res).toEqual("Connection error");
    });
});
