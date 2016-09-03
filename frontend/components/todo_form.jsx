import React from 'react';
import ListUtil from '../utils/list_util';

const TodoForm = React.createClass({
  getInitialState () {
    return {
      name: this.props.todo.name
    };
  },

  updateName (e) {
    e.preventDefault();
    this.setState({ name: e.currentTarget.value });
  },

  handleSubmit () {
    let newTodo = this.props.todo;
    newTodo.name = this.state.name;
    if (this.props.todo.id) {
      if (this.state.name === '') {
        ListUtil.deleteTodo(newTodo);
        return;
      }
      ListUtil.updateTodo(newTodo);
    } else {
      if (this.state.name === '') {
        return;
      }
      ListUtil.createTodo(newTodo, () => { this.setState({name: ''}); });
    }
  },

  submitOrDeleteOnEmpty (e) {
    e.preventDefault();
    if (this.state.name === '') {
      ListUtil.deleteTodo(this.props.todo);
    } else {
      this.handleSubmit();
    }
  },

  submitOrReturnOnEmpty (e) {
    e.preventDefault();
    if (this.state.name === '') { return; }
    this.handleSubmit();
  },

  render () {
    return (
      <form className='todo-form' onSubmit={this.submitOrDeleteOnEmpty}>
        <input
          value={this.state.name}
          onChange={this.updateName}
          onBlur={this.submitOrReturnOnEmpty}
        />
      </form>
    );
  }
});

export default TodoForm;
