import * as React from "react";
import Todo from "../models/Todo";

interface TodoListProps {
  todos: Todo[];
}

interface TodoListState {}

export default class TodoList extends React.Component<
  TodoListProps,
  TodoListState
> {
  constructor(props: TodoListProps) {
    super(props);
  }
  render() {
    const { todos } = this.props;
    return (
      <div>
        <ul>
          { todos.map(todo => (
            <li>{todo.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
