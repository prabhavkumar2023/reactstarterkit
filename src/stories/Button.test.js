// write a unit test for the Button component
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';
describe('Button', () => {
  it('renders Button component', () => {
    render(<Button primary size='medium' label='click' />);
  })
  it('should render with backgroundColor', () => {
    render(<Button primary size='medium' 
    label='click' 
    backgroundColor='red'
    />);
    const button = screen.getByText('click');
    expect(button).toHaveStyle({backgroundColor: 'red'});
  
  }); 

});