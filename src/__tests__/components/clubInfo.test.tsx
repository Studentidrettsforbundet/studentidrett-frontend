import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import ClubInfo from '../../components/ClubInfo/clubInfo';
import store from '../../store/store';
import { singleClub } from '../../assets/testMock';

describe('clubCard', () => {
    test('renders correctly', () => {
        const tree = renderer.create(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/sports/1']}>
                    <ClubInfo
                        title={singleClub.name}
                        contact_email={singleClub.contact_email}
                        price={singleClub.membership_fee}
                        register_info={singleClub.register_info}
                        description={singleClub.description}
                    />
                </MemoryRouter>
            </Provider>,
        );
        expect(tree).toMatchSnapshot();
    });
});
