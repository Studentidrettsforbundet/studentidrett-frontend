import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import ClubPage from '../../pages/clubPage';
import store from '../../store/store';
import 'mutationobserver-shim';

describe('clubPage', () => {
    global.MutationObserver = window.MutationObserver;
    test('renders correctly', () => {
        const tree = renderer.create(
            <Provider store={store}>
                <MemoryRouter>
                    <ClubPage />
                </MemoryRouter>
            </Provider>,
        );
        expect(tree).toMatchSnapshot();
    });
});
