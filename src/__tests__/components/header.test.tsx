import React from 'react';
import { Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Header from '../../components/Header/header';
import { createMemoryHistory } from 'history';
import store from '../../store/store';
import { Provider } from 'react-redux';
const history = createMemoryHistory();

describe('header', () => {
    describe('snapshot tests', () => {
        it('should render correctly', () => {
            const tree = renderer
                .create(
                    <Provider store={store}>
                        <Router history={history}>
                            <Header />
                        </Router>
                    </Provider>,
                )
                .toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});
