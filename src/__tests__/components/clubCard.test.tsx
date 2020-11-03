import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import ClubCard from '../../components/ClubCard/clubCard';
import store from '../../store/store';
import { singleClub } from '../../assets/testMock';

describe('clubCard', () => {
    test('renders correctly', () => {
        const tree = renderer.create(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/sports/1']}>
                    <ClubCard {...singleClub} />
                </MemoryRouter>
            </Provider>,
        );
        expect(tree).toMatchSnapshot();
    });
});
