import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import store from '../../store/store';
import 'mutationobserver-shim';
import SearchResults from '../../pages/searchResults';

describe('regionPage', () => {
    global.MutationObserver = window.MutationObserver;
    test('renders correctly', () => {
        const tree = renderer.create(
            <Provider store={store}>
                <MemoryRouter>
                    <SearchResults />
                </MemoryRouter>
            </Provider>,
        );
        expect(tree).toMatchSnapshot();
    });
});
