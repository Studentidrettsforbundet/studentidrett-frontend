import React from 'react';
import { Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Header from '../../components/header';
import { createMemoryHistory } from 'history';
const history = createMemoryHistory();

describe('header', () => {
    describe('snapshot tests', () => {
        it('should render correctly', () => {
            const tree = renderer
                .create(
                    <Router history={history}>
                        <Header />
                    </Router>,
                )
                .toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});
