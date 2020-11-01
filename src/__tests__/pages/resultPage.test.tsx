import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import ResultPage from '../../pages/resultPage';
import configureMockStore from 'redux-mock-store';

const store = configureMockStore();

const mockProps = {
    state: {
        recommendation: [
            {
                name: 'name1',
                id: 'test1',
            },
            {
                name: 'name2',
                id: 'test2',
            },
            {
                name: 'name3',
                id: 'test3',
            },
        ],
    },
};

describe('resultPage', () => {
    describe('snapshot tests', () => {
        it('should render correctly', () => {
            const tree = renderer
                .create(
                    <Provider store={store({})}>
                        <BrowserRouter>
                            <ResultPage location={mockProps} />
                        </BrowserRouter>
                        ,
                    </Provider>,
                )
                .toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});
