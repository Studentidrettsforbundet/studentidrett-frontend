import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import CityPage from '../../pages/cityPage';
import 'mutationobserver-shim';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

const state = {
    city: {
        cities: [
            {
                id: 1,
                name: 'test city',
            },
        ],
    },
    sport: {
        sports: [
            {
                id: 1,
                name: 'Fotball',
                labels: [
                    {
                        text: 'utendørs',
                        sports: ['Fotball', 'Langrenn', 'Rumpeldunk'],
                        alternatives: ['Utendørs'],
                    },
                    {
                        text: 'ballspill',
                        sports: ['Fotball', 'Håndball'],
                        alternatives: ['Ballspill'],
                    },
                    {
                        text: 'lag',
                        sports: ['Fotball', 'Håndball', 'Ishockey', 'Lacrosse', 'Roing', 'Rumpeldunk', 'Volleyball'],
                        alternatives: ['Lag'],
                    },
                    {
                        text: 'kontakt',
                        sports: ['Fotball', 'Håndball', 'Ishockey', 'Lacrosse'],
                        alternatives: [],
                    },
                    {
                        text: 'sommer',
                        sports: ['Fotball', 'Friidrett', 'Lacrosse', 'Roing', 'Rumpeldunk', 'Volleyball'],
                        alternatives: ['Sommer'],
                    },
                    {
                        text: 'kontaktsport',
                        sports: ['Fotball'],
                        alternatives: [],
                    },
                    {
                        text: 'kontaktidrett',
                        sports: ['Fotball', 'Håndball', 'Ishockey', 'Lacrosse'],
                        alternatives: ['Kontakt'],
                    },
                ],
            },
        ],
    },
    club: {
        clubs: [
            {
                id: 4,
                city: 1,
                name: 'Abakus',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                contact_email: 'test2@abakus.no',
                membership_fee: 'Helt gratis!',
                register_info: 'Send mail til leder for å melde interesse',
            },
        ],
    },
    thunk: { post_success: false, post_in_progress: false, post_failed_count: 0 },
    searchBar: {
        showSearchBar: false,
    },
};

jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom') as any),
    useParams: () => ({
        id: '1',
    }),
    useRouteMatch: () => ({ url: '/cities/1' }),
}));

describe('clubPage', () => {
    global.MutationObserver = window.MutationObserver;
    test('renders correctly', () => {
        const store = mockStore(state);
        const tree = renderer.create(
            <Provider store={store}>
                <MemoryRouter>
                    <CityPage />
                </MemoryRouter>
            </Provider>,
        );
        expect(tree).toMatchSnapshot();
    });
});
