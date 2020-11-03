import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import ClubCard from '../../components/ClubCard/clubCard';
import store from '../../store/store';

describe('clubCard', () => {
    test('renders correctly', () => {
        const tree = renderer.create(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/MidtNorge/Fotball']}>
                    <ClubCard
                        id={0}
                        city={0}
                        name={'NTNUIFotball'}
                        description={'This is where the description goes'}
                        contact_email={'contact.email.com'}
                        membership_fee={'100'}
                        register_info={'this is where register info goes'}
                    />
                </MemoryRouter>
            </Provider>,
        );
        expect(tree).toMatchSnapshot();
    });
});
