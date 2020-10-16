import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import SportPage from '../../pages/sportPage';
import store from '../../store/store';


describe('sportPage', () => {
    test("renders correctly", () => {
        const tree = renderer
            .create(<Provider store={store}>
                <MemoryRouter>
                    <SportPage />
                </MemoryRouter>
            </Provider>);
        expect(tree).toMatchSnapshot();
    });
});