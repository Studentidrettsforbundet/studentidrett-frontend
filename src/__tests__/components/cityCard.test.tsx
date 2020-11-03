import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import CityCard from '../../components/CityCard/cityCard';
import store from '../../store/store';
import { singleCity } from '../../assets/testMock';

describe('groupCard', () => {
    test('renders correctly', () => {
        const tree = renderer.create(
            <Provider store={store}>
                <MemoryRouter>
                    <CityCard {...singleCity} />
                </MemoryRouter>
            </Provider>,
        );
        expect(tree).toMatchSnapshot();
    });
});
