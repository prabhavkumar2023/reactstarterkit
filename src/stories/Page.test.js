import React from 'react';
import { render, screen ,fireEvent} from '@testing-library/react';
import { Page } from './Page';
describe('Page', () => {
    it('renders Page component', () => {
        render(<Page />);
    })
    it('should set user to Jane Doe onLogin', () => {
        render(<Page />);
    
        const loginButton = screen.getByText('Log in');

        // Simulate the login button click
        fireEvent.click(loginButton);
        expect(screen.getByText('Jane Doe')).toBeInTheDocument();
      });
    // //   logout test
        it('should set  login on onLogout', () => {
            render(<Page />);
            const loginButton = screen.getByText('Log in');
            fireEvent.click(loginButton);
            const logoutButton = screen.getByText('Log out');
            fireEvent.click(logoutButton);
            // Simulate the login button click
            // fireEvent.click(logoutButton);
         expect(screen.getByText('Log in')).toBeInTheDocument();
        });
        it('Sign up click', () => {
            render(<Page />);
            const signUpButton = screen.getByText('Sign up');
            fireEvent.click(signUpButton);
            expect(screen.getByText('Log out')).toBeInTheDocument();
        });
        
    

    
    });