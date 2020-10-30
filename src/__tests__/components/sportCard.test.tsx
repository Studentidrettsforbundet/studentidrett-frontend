import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import SportCard from '../../components/SportCard/sportCard';
import store from '../../store/store';
import {singleSport} from "../../assets/testMock";


describe('SportCard', () => {
    test("renders correctly", () => {
        const tree = renderer
            .create(<Provider store={store}>
                <MemoryRouter initialEntries={["/cities/1"]}>
                    <SportCard {...singleSport} />
                </MemoryRouter>
            </Provider>);
        expect(tree).toMatchSnapshot();
    });
});