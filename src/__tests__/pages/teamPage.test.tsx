import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import TeamPage from '../../pages/teamPage';
import store from '../../store/store';
import 'mutationobserver-shim';

describe('teamPage', () => {
    
    global.MutationObserver = window.MutationObserver;
    jest.resetAllMocks()
    test('renders correctly', () => {
        const tree = renderer.create(
            <Provider store={store}>
                <MemoryRouter>
                    <TeamPage />
                </MemoryRouter>
            </Provider>,
        );
        expect(tree).toMatchSnapshot();
    });
});