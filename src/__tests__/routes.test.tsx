import React from 'react';
import renderer from 'react-test-renderer';
import { Link, MemoryRouter } from 'react-router-dom';
import { act } from '@testing-library/react';

describe('routes.tsx', () => {
    window.scrollTo = jest.fn();

    test('renders home Link correctly', () => {
        const tree = renderer.create(
            <MemoryRouter>
                <Link to={'/Regions'} key={0} className={'unstyled_link'} />
            </MemoryRouter>,
        );
        expect(tree).toMatchSnapshot();
    });
    test('renders region Link correctly', () => {
        const tree = renderer.create(
            <MemoryRouter>
                <Link to={'/NordNorge'} key={0} className={'unstyled_link'} />
            </MemoryRouter>,
        );
        expect(tree).toMatchSnapshot();
    });
    test('renders sport Link correctly', () => {
        const tree = renderer.create(
            <MemoryRouter>
                <Link to={'NordNorge/Fotball'} key={0} className={'unstyled_link'} />
            </MemoryRouter>,
        );
        expect(tree).toMatchSnapshot();
    });
    test('renders club Link correctly', () => {
        const tree = renderer.create(
            <MemoryRouter>
                <Link to={'MidtNorge/Fotball/NTNUIFotball'} key={0} className={'unstyled_link'} />
            </MemoryRouter>,
        );
        expect(tree).toMatchSnapshot();
    });
});

describe('index.tsx', () => {
    test('renders without crashing', async () => {
        const root = document.createElement('div');
        root.setAttribute('id', 'root');
        document.body.appendChild(root);
        await act(async () => {
            require('../index');
        });
    });
});
