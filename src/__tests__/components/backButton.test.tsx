import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import store from '../../store/store';

import BackButton from '../../components/BackButton/backButton';

describe('backButton', () => {
    test('renders correctly', () => {
        const tree = renderer.create(
            <Provider store={store}>
                <MemoryRouter>
                    <BackButton />
                </MemoryRouter>
            </Provider>,
        );
        expect(tree).toMatchSnapshot();
    });
});
