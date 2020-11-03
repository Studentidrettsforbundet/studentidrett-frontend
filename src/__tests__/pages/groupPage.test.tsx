import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import GroupPage from '../../pages/groupPage';
import store from '../../store/store';
import 'mutationobserver-shim';

describe('clubPage', () => {
    global.MutationObserver = window.MutationObserver;
    test('renders correctly', () => {
        const tree = renderer.create(
            <Provider store={store}>
                <MemoryRouter>
                    <GroupPage />
                </MemoryRouter>
            </Provider>,
        );
        expect(tree).toMatchSnapshot();
    });
});