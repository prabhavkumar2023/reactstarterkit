import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

// Import your Redux store and any other dependencies here

const mockStore = configureMockStore();

function renderWithRedux(
  ui,
  { initialState = {}, store: providedStore, ...renderOptions } = {}
) {
  const store = providedStore || mockStore(initialState);

  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export default renderWithRedux;
