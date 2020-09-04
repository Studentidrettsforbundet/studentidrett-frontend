import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom/extend-expect';

test('renders hello', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Hello/i);
    expect(linkElement).toBeInTheDocument();
});
