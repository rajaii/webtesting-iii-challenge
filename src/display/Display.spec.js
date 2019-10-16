// Test away!
import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import Display from './Display.js';
import Dashboard from '../dashboard/Dashboard.js';

describe('display component displays proper text at proper times', () => {
  

    it('displays if gate is open unlocked', () => {
        const wrapper = render(<Dashboard />);
         
        wrapper.getByText('Unlocked');
        wrapper.getByText('Open');
        
    })

    it('displays if gate is closed ', () => {
        const wrapper = render(<Display closed={true} locked={true} />);
        wrapper.getByText('Locked');
        wrapper.getByText('Closed');
    })
    it('displays if gate is closed ', () => {
        const wrapper = render(<Display closed={false} locked={true} />);
        wrapper.getByText('Locked');
        wrapper.getByText('Open');
    })
    it('displays if gate is closed ', () => {
        const wrapper = render(<Display closed={true} locked={false} />);
        wrapper.getByText('Unlocked');
        wrapper.getByText('Closed');
    })

})

describe('display component utilizes proper classNames at proper times', () => {
  

    it('displays if gate is open unlocked', () => {
        const wrapper = render(<Display />);
        
        wrapper.getByTestId('led green-led');
        
    })

    it('displays if gate is closed ', () => {
        const wrapper = render(<Display closed={true} locked={true} />);
        wrapper.getByTestId('led red-led');
       
    })
    it('displays if gate is closed ', () => {
        const wrapper = render(<Display closed={false} locked={true} />);
       wrapper.getByTestId('led green-led');
       wrapper.getByTestId('led red-led');

      
    })
    it('displays if gate is closed ', () => {
        const wrapper = render(<Display closed={true} locked={false} />);
        wrapper.getByTestId('led green-led');
        wrapper.getByTestId('led red-led');
 
    })

})

//hacked the class check test with a test id, find out how to do it right


