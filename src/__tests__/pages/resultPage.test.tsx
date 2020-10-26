import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import ResultPage from '../../pages/resultPage';

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
                    <BrowserRouter>
                        <ResultPage location={mockProps} />
                    </BrowserRouter>,
                )
                .toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});
