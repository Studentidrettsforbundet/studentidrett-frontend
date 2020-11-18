import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import store, { combinedState } from '../../store/store';
import Breadcrumbs from '../../components/Breadcrumbs/breadcrumbs';

describe('Breadcrumbs', () => {
    test('renders correctly', () => {
        const tree = renderer.create(
            <Provider store={store}>
                <MemoryRouter>
                    <Breadcrumbs state={combinedState} />
                </MemoryRouter>
            </Provider>,
        );
        expect(tree).toMatchSnapshot();
    });
});
