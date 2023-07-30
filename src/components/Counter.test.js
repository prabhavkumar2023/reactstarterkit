
import React from 'react';
import configureMockStore from 'redux-mock-store';
import { increment , decrement } from '../redux/reducer/counter/counterSlice';
import renderWithRedux from '../testHelper/renderWithRedux';
import { screen, fireEvent } from '@testing-library/react';
import { Counter } from './Counter';
const mockStore = configureMockStore();

const store = mockStore({
    counter: {
        value: 0,
    },
});

describe('Counter Component', () => {  
   
    it('should render with value 0', () => {
        renderWithRedux(<Counter />, { store });
        const value = screen.getByText('0');
        expect(value).toBeInTheDocument();
    });
    it('should call increment on click', () => {
        renderWithRedux(<Counter />, { store });
        const incrementButton = screen.getByLabelText('Increment value');
        fireEvent.click(incrementButton);
        expect(store.getActions()).toContainEqual(increment());
    }
    );
    it('should call decrement on click', () => {
        renderWithRedux(<Counter />, { store });
        const decrementButton = screen.getByLabelText('Decrement value');
        fireEvent.click(decrementButton);
        expect(store.getActions()).toContainEqual(decrement());
    }
    );

});
