import { configureStore } from '@reduxjs/toolkit';
import counterReducer, { increment, decrement, incrementByAmount } from './counterSlice';

describe('counterSlice', () => {
  let store;

  beforeEach(() => {
    store = configureStore({ reducer: counterReducer });
  });

  it('should increment the value', () => {
    store.dispatch(increment());
    const state = store.getState();
    expect(state.value).toBe(1);
  });

  it('should decrement the value', () => {
    store.dispatch(decrement());
    const state = store.getState();
    expect(state.value).toBe(-1);
  });

  it('should increment the value by a specific amount', () => {
    const incrementAmount = 5;
    store.dispatch(incrementByAmount(incrementAmount));
    const state = store.getState();
    expect(state.value).toBe(incrementAmount);
  });
});
