import logger from 'redux-logger';
import { State, reducer, initialState} from '../reducers';
import {createStore, applyMiddleware, compose} from 'redux';
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore<State, any, any, any>(reducer,initialState, composeEnhancers(applyMiddleware(logger)));

export default store;