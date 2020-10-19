import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import RegionPage from '../../pages/regionPage';
import store from '../../store/store';


describe('regionPage', () => {
    test("renders correctly", () => {
        const tree = renderer
            .create(<Provider store={store}>
                <MemoryRouter>
                    <RegionPage />
                </MemoryRouter>
                </Provider>);
        expect(tree).toMatchSnapshot();
    });
});