// Test away
import React from 'react';
import renderer from 'react-test-renderer';

import Dashboard from './Dashboard.js';

describe('dashboard --ie app', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<Dashboard />).toJSON();

        expect(tree).toMatchSnapshot();   
    })
})