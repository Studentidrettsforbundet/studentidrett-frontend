import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../../components/header';

describe('header', () => {
    describe('snapshot tests', () => {
        it('should render correctly', () => {
            const tree = renderer.create(<Header />).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});
