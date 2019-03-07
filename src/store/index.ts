import logger from 'redux-logger';
import { State, reducer, initialState} from '../reducers';
import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
  });

const store = createStore<State, any, any, any>(reducer,initialState, composeEnhancers(applyMiddleware(logger)));

export default store;