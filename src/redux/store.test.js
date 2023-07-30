import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducer/counter/counterSlice';
import { store } from './store';

describe('Redux Store Configuration', () => {
  it('should configure store with counter reducer', () => {
    const configuredStore = configureStore({
      reducer: {
        counter: counterReducer,
      },
    });

    const initialState = configuredStore.getState();

    expect(initialState).toEqual(store.getState());
  });
});
