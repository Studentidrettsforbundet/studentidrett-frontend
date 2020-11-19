import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import GroupInfo from '../../components/GroupInfo/groupInfo';
import store from '../../store/store';
import { singleGroup } from '../../assets/testMock';

describe('clubCard', () => {
    test('renders correctly', () => {
        const tree = renderer.create(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/sports/1']}>
                    <GroupInfo title={singleGroup.name} description={singleGroup.description} />
                </MemoryRouter>
            </Provider>,
        );
        expect(tree).toMatchSnapshot();
    });
});
