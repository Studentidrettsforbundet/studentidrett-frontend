import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import QuestionnairePage from '../../pages/questionnairePage';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { handleQuestionsThunk } from '../../services/api';

const mockStore = configureStore([]);

jest.mock('../../services/api', () => ({
    handleQuestionsThunk: jest.fn(() => Promise.resolve()),
}));

const state = {
    questionnaire: {
        questions: [
            {
                id: 'test_id',
                text: 'Test question',
                left: 'Left item',
                right: 'Right item',
            },
        ],
    },
    thunk: { post_success: false, post_in_progress: false, post_failed_count: 0 },
};

describe('questionnairePage', () => {
    let store: any;
    beforeEach(() => {
        store = mockStore(state);
        store.dispatch = jest.fn();
    });

    it('should render correctly', async () => {
        const tree = renderer.create(
            <Provider store={store}>
                <BrowserRouter>
                    <QuestionnairePage />
                </BrowserRouter>
            </Provider>,
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('should send correct request body with post on submit', async () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <QuestionnairePage />
                </BrowserRouter>
            </Provider>,
        );

        fireEvent.click(screen.getByTestId('test_id-3'));
        await act(async () => {
            fireEvent.click(screen.getByText('Send inn'));
        });

        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(handleQuestionsThunk).toHaveBeenCalledWith(false, [{ answer: '3', qid: 'test_id' }]);
    });
});
