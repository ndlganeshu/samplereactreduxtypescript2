import * as React from "react";
import AddTodo from "../containers/AddTodo";
import Todos from "../containers/TodosContainer";


export default class TodosComponent extends React.Component{

  render() {

    return (
      <div>
        <h1>Todo List....</h1>
        <AddTodo />
        <Todos />
      </div>
    );
  }
}
