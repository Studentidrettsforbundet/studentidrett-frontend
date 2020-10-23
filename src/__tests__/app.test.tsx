import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../store/store';


describe('App', () => {
    test("renders correctly", () => {
        const tree = renderer
            .create(<Provider store={store}>
                <MemoryRouter>
                    <App />
                </MemoryRouter>
            </Provider>);
        expect(tree).toMatchSnapshot();
    });
});

