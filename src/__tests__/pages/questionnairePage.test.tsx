import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import QuestionnairePage from '../../pages/questionnairePage';
import { Provider } from 'react-redux';
import store from '../../store/store';

describe('questionnairePage', () => {
    it('should render correctly', async () => {
        const tree = renderer.create(
            <Provider store={store}>
                <BrowserRouter>
                    <QuestionnairePage />
                </BrowserRouter>
            </Provider>,
        );

        expect(tree).toMatchSnapshot();
    });
});

/*

const mockResponse = [
    {
        id: 'test_id',
        text: 'Test question',
        left: 'Left item',
        right: 'Right item',
    },
];

jest.mock('../../services/api', () => ({
    fetchData: jest.fn(() => Promise.resolve(mockResponse)),
}));

describe('questionnairePage', () => {
    beforeEach(() => {
        fetchMock.restore();
    });

    describe('snapshot tests', () => {
        it('should render correctly', async () => {
            let tree: any;

            await rendererAct(async () => {
                tree = renderer.create(
                    <BrowserRouter>
                        <QuestionnairePage />
                    </BrowserRouter>,
                );
            });
            expect(tree.toJSON()).toMatchSnapshot();
        });
    });

    it('should send correct request body with post on submit', async () => {
        fetchMock.mock('https://kundestyrt-nsi-backend.azurewebsites.net/questionnaire/', { status: 200 });

        act(() => {
            render(
                <BrowserRouter>
                    <QuestionnairePage />
                </BrowserRouter>,
            );
        });
        await waitFor(() => screen.findByTestId('test_id-3'));

        fireEvent.click(screen.getByTestId('test_id-3'));
        await act(async () => {
            fireEvent.click(screen.getByText('Send'));
        });

        expect(fetchMock.lastCall()).toMatchInlineSnapshot(`
            Array [
              "https://kundestyrt-nsi-backend.azurewebsites.net/questionnaire/",
              Object {
                "body": "[{\\"qid\\":\\"test_id\\",\\"answer\\":\\"3\\"}]",
                "headers": Object {
                  "Content-Type": "application/json",
                },
                "method": "POST",
              },
            ]
        `);
    });

    it('should redirect on submit', async () => {
        fetchMock.mock(
            'https://kundestyrt-nsi-backend.azurewebsites.net/questionnaire/',
            {
                status: 200,
                body: JSON.stringify({ response: 'Test response' }),
                statusText: 'OK',
                headers: { 'Content-Type': 'application/json' },
                sendAsJson: false,
            },
            { method: 'POST' },
        );

        const { container } = render(
            <Router history={history}>
                <Route path="/" exact={true} render={() => <QuestionnairePage />} />
                <Route path="/questionnaire/result" render={() => <div>Redirect Page</div>} />
            </Router>,
        );

        await waitFor(() => screen.findByTestId('test_id-3'));

        fireEvent.click(screen.getByTestId('test_id-3'));
        await act(async () => {
            fireEvent.click(screen.getByText('Send'));
        });

        expect(container.innerHTML).toMatchInlineSnapshot(`"<div>Redirect Page</div>"`);
    });
});

*/
