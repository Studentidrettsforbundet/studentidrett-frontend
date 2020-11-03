import React, { useState } from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import TeamCard from '../../components/TeamCard/teamCard';
import TeamCardExpanded from '../../components/TeamCard/teamCardExpanded';
import store from '../../store/store';
import {singleTeam} from "../../assets/testMock";


describe('teamCard', () => {
    test("renders correctly", () => {
        const tree = renderer
            .create(<Provider store={store}>
                <MemoryRouter initialEntries={["/teams/1"]}>
                    <TeamCard {...singleTeam} />
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
