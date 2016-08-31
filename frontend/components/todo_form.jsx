import React from 'react';
import ListUtil from '../utils/list_util';

const TodoForm = React.createClass({
  getInitialState () {
    return {
      name: this.props.todo.name,
    };
  },

  updateName (e) {
    e.preventDefault();
    this.setState({ name: e.currentTarget.value });
  },

  handleSubmit (e) {
    e.preventDefault();
    if (this.state.name === '') { return; }
    // TODO add list_id
    ListUtil.createTodo(this.state.todo);

    this.setState({ name: '' });
  },

  render () {
    return (
      <form className='todo-form todo-item' onSubmit={this.handleSubmit}>
        <input
          value={this.state.name}
          onChange={this.updateName} />
      </form>
    );
  }
});

export default TodoForm;
