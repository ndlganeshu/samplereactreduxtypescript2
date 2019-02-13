import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { getTodos } from '../selectors/todos';
import { State } from '../reducers';

const mapStateToProps = (state: State) => ({
  todos: getTodos(state)
});

const mapDispatchToProps = {};

export default connect<any, any, any>(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
