import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import TeamInfo from '../../components/TeamInfo/teamInfo';
import store from '../../store/store';
import { singleTeam } from '../../assets/testMock';

describe('clubCard', () => {
    test('renders correctly', () => {
        const tree = renderer.create(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/sports/1']}>
                    <TeamInfo {...singleTeam} />
                </MemoryRouter>
            </Provider>,
        );
        expect(tree).toMatchSnapshot();
    });
});
