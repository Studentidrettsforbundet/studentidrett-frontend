import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import RegionCard from '../../components/regionCard';
import store from '../../store/store';


describe('regionCard', () => {
    test("renders correctly", () => {
        const tree = renderer
            .create(<Provider store={store}>
                <MemoryRouter>
                    <RegionCard id={0} name={"MidtNorge"} cities={[]}/>
                </MemoryRouter>
            </Provider>);
        expect(tree).toMatchSnapshot();
    });
});