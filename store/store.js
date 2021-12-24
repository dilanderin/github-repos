import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './rootReducer';

const makeStore = () => createStore(rootReducer, applyMiddleware(thunk));

export const wrapper = createWrapper(makeStore);
