import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import SearchCard from '../../components/SearchCard/searchCard';
import store from '../../store/store';
import { CITY } from '../../constants';

describe('regionCard', () => {
    test('renders correctly', () => {
        const tree = renderer.create(
            <Provider store={store}>
                <MemoryRouter>
                    <SearchCard id={'1'} name={'Test'} label={CITY} />
                </MemoryRouter>
            </Provider>,
        );
        expect(tree).toMatchSnapshot();
    });
});
