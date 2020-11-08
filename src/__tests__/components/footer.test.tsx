import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../../components/Footer/footer';

describe('footer', () => {
    describe('snapshot tests', () => {
        it('should render correctly', () => {
            const tree = renderer.create(<Footer />).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});
