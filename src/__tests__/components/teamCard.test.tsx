import React, { useState } from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import TeamCard from '../../components/TeamCard/teamCard';
import TeamCardExpanded from '../../components/TeamCard/teamCardExpanded';
import store from '../../store/store';


describe('teamCard', () => {
    test("renders correctly", () => {
        const tree = renderer
            .create(<Provider store={store}>
                <MemoryRouter initialEntries={["/teams/1"]}>
                    <TeamCard id={0} name={"Men A"} full_capacity={true}
                        short_description={"This is where the short description goes"} long_description={"This is where the long description goes"}
                        tryouts={true} registration_open={true} group={100} />
                </MemoryRouter>
            </Provider>);
        expect(tree).toMatchSnapshot();
    });

    test("renders expanded card correctly", () => {
        const tree = renderer
            .create(<Provider store={store}>
                <MemoryRouter initialEntries={["/teams/1"]}>
                    <TeamCardExpanded long_description={"This is a long description"} full_capacity={false} tryouts={true} registration_open={true} />
                </MemoryRouter>
            </Provider>);
        expect(tree).toMatchSnapshot();
    });

});
