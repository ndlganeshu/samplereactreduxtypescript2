import Todo from 'src/models/Todo';

export enum ActionTypes {
  ADD_TODO = "ADD_TODO"
}

export interface AddTodoAction {type: ActionTypes.ADD_TODO, payload: {todo: Todo}}

export function addTodo(name: string) {
  return {
    type: ActionTypes.ADD_TODO,
    payload: {
      todo: {
        name: name
      }
    }
  };
}

export type Action = AddTodoAction;
