import * as React from "react";

interface AddtodoProps {
    handleSubmit: (value: string) => void
}

interface AddtodoState {
    value: string
}

export default class Addtodo extends React.Component<
  AddtodoProps,
  AddtodoState
> {
  constructor(props: AddtodoProps) {
    super(props);
    this.state = {value: ''};
  }

  addTodo() {
      this.props.handleSubmit(this.state.value);
  }

  newTodo(val: string) {
      this.setState({value: val})
  }

  render() {
    return (
      <div>
        <input type="text" onChange={e => this.newTodo(e.target.value)} />
        <button onClick={()=>this.addTodo()}>Add</button>
      </div>
    );
  }
}
