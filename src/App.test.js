import { render, screen } from '@testing-library/react';
import App from './App';
import configureMockStore from 'redux-mock-store';

import { Provider } from 'react-redux';
const mockStore = configureMockStore();
const store = mockStore({
  counter: {
    value: 0,
  },
});
const mockDecrement = jest.fn();
const mockIncrement = jest.fn();
jest.mock('./redux/reducer/counter/counterSlice', () => ({
  decrement: () => mockDecrement(),
  increment: () => mockIncrement(),
}));
// moke the redux store and  decrement, increment functions


it('renders learn react link', () => {

  render(
    <Provider store={store}>
      <App />
    </Provider>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

