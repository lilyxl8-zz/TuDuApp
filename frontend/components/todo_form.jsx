import React from 'react';
import ListUtil from '../utils/list_util';

const TodoForm = React.createClass({
  getInitialState () {
    return {
      todo: this.props.todo,
    };
  },

  updateName (e) {
    let newTodo = this.state.todo;
    newTodo.name = e.currentTarget.value;
    this.setState({ todo: newTodo });
  },

  handleSubmit (e) {
    e.preventDefault();
    if (this.state.todo.name === '') { return; }
    ListUtil.createTodo(this.state.todo);

    let newTodo = this.state.todo;
    newTodo.name = '';
    this.setState({ todo: newTodo });
  },

  render () {
    return (
      <form className='todo-form todo-item' onSubmit={this.handleSubmit}>
        <input
          value={this.state.todo.name}
          onChange={this.updateName} />
      </form>
    );
  }
});

export default TodoForm;
