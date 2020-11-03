import React, { useState } from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import TeamCard from '../../components/TeamCard/teamCard';
import store from '../../store/store';

describe('teamCard', () => {
    test('renders correctly', () => {
        const tree = renderer.create(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/teams/1']}>
                    <TeamCard
                        id={0}
                        name={'Men A'}
                        gender={'MX'}
                        short_description={'This is where the short description goes'}
                        availability={'OP'}
                        skill_level={'PRO'}
                    />
                </MemoryRouter>
            </Provider>,
        );
        expect(tree).toMatchSnapshot();
    });
});
