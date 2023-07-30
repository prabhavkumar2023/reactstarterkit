// write a unit test for the Button component
import React from 'react';
import { render } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
    test('renders Header component', () => {
      const  user ={
            name: 'John Doe'
        } 
        const onCreateAccount = jest.fn();
        const onLogin = jest.fn();
        const onLogout = jest.fn();
      render(<Header user={user} onCreateAccount={onCreateAccount} onLogin={onLogin} onLogout={onLogout} />);
    });
    }
);