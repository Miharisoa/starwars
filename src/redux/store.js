import { createStore, applyMiddleware, Dispatch } from 'redux';
import thunk from 'redux-thunk';
import reducers from './combine';

export const store = createStore(reducers, {}, applyMiddleware(thunk));