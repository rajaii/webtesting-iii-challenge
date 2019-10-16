// Test away!


import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import Controls from './Controls.js';
import Dashboard from '../dashboard/Dashboard.js';

describe('Controls component displays proper text at proper times', () => {
  

    it('displays if gate is closed ', () => {
        const wrapper = render(<Controls />);
        wrapper.getByText('Lock Gate');
        wrapper.getByText('Close Gate');
    })

    it('changes to reflect the state the door will be in if clicked', () => {
        const { getByText, findByText } = render(<Controls />);

       fireEvent.click(getByText("Lock Gate"));
       findByText(/Unlock Gate/i);

       fireEvent.click(getByText("Close Gate"));
       findByText(/Open Gate/i);

    })
    
    it('disables open gate button if door is locked', () => {
        const { getByText, findByText } = render(<Controls locked={true} closed={true} />);

       

       fireEvent.click(getByText("Open Gate"));
       findByText(/Open Gate/i);

    })

    it('changes to reflect the state the door will be in if clicked', () => {
        const { getByText, findByText } = render(<Controls />);

       fireEvent.click(getByText("Lock Gate"));
       findByText(/Lock Gate/i);

    })

})











// - the closed toggle button is disabled if the gate is locked
// - the locked toggle button is disabled if the gate is open
