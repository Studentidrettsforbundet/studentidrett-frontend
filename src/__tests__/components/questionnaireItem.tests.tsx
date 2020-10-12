import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import QuestionnaireItem from '../../components/questionnaireItem';

const mockFunction = jest.fn();
const mockProps = 
  {
      item: {
          id: 'test_id',
          question: 'Test question',
          leftItem: 'Left item',
          rightItem: 'Right item',
      },
      onChange: mockFunction,
      error: '',
  }
;

describe('questionnaireItem', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  describe('snapshot tests', () => {
  
    it('renders correctly with no error', () => {
      const tree = renderer
        .create(<QuestionnaireItem item={mockProps.item} onChange={mockProps.onChange} error={mockProps.error}/>)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  
    it('renders correctly with error', () => {
      const tree = renderer
        .create(<QuestionnaireItem item={mockProps.item} onChange={mockProps.onChange} error="Test error"/>)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  })

  it('should invoke callback on event', () => {
    const {getByTestId} = render(<QuestionnaireItem item={mockProps.item} onChange={mockProps.onChange} error={mockProps.error}/>)

    fireEvent.click(getByTestId('test_id-3'))

    expect(mockFunction).toBeCalledWith('3')
  });
})