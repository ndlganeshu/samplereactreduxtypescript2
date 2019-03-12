import * as React from 'react';
import './App.css';
// import Hello from './components/Hello';
import TodosComponent from './components/TodosComponent';
import Exa from './components/fabric/exa';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
      <Exa />
      <TodosComponent />
       {/* <Hello name="Ganesh" enthusiasmLevel={10}/> */}
      </div>
    );
  }
}

export default App;
