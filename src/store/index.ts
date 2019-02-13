import logger from 'redux-logger';
import { State, reducer, initialState} from '../reducers';
import {createStore, applyMiddleware} from 'redux';

const store = createStore<State, any, any, any>(reducer,initialState, applyMiddleware(logger));

export default store;