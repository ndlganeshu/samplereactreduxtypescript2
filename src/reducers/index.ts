import { combineReducers } from "redux";
import * as fromTodos from "./todos";

export interface State {
  todos: fromTodos.State;
}

/*
 * initialState of the app
 */
export const initialState: State = {
  todos: fromTodos.initialState
};

export const reducer = combineReducers<State>({
  todos: fromTodos.reducer
});
