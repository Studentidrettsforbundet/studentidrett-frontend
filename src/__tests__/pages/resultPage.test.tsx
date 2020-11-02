import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import ResultPage from '../../pages/resultPage';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('resultPage', () => {
    describe('snapshot tests', () => {
        it('should render correctly', () => {
            const store = mockStore({
                questionnaire: {
                    recommendations: [
                        {
                            name: 'name1',
                            id: 'id1',
                        },
                        {
                            name: 'name2',
                            id: 'id2',
                        },
                        {
                            name: 'name3',
                            id: 'id3',
                        },
                    ],
                },
            });
            const tree = renderer
                .create(
                    <Provider store={store}>
                        <BrowserRouter>
                            <ResultPage />
                        </BrowserRouter>
                    </Provider>,
                )
                .toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});
