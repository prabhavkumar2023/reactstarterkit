import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducer/counter/counterSlice';
import LoginSliceReducer  from './reducer/Login/LoginSlice';
import globelConfigSliceReducer  from './reducer/globelConfig/globelConfig';
import thunk from 'redux-thunk';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: LoginSliceReducer,
    globel: globelConfigSliceReducer,
    middleware: [thunk],
  },

})