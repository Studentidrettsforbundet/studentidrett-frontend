import {SET_SEARCH, setSearchActionCreator} from "../../store/pages/search/searchActions";
import {searchResult} from "../../assets/testMock";

describe('Actions', () => {
    test('Should create a setSearchAction', () => {
        const data = searchResult;

        const expected = {
            type: SET_SEARCH,
            payload: [data],
        };

        expect(setSearchActionCreator([data])).toStrictEqual(expected);
    });
});
