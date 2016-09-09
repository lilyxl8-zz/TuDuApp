import React from 'react';
import ListUtil from '../utils/list_util';

// TODO put this component back in TodoView?
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

  focus (e) {
    e.preventDefault();
    this.refs.todoInput.focus();
  },

  handleSubmit () {
    let newTodo = this.props.todo;
    newTodo.name = this.state.name;
    if (this.props.todo.id) {
      ListUtil.updateTodo(newTodo);
      this.props.toggleEditing && this.props.toggleEditing();
    } else {
      ListUtil.createTodo(newTodo, () => { this.setState({name: ''}); });
    }
  },

  deleteOnEmptySubmit (e) {
    e.preventDefault();
    // TODO have ListUtil handle empty case, write updateOrDelete(todo)
    if (this.state.name === '') {
      ListUtil.deleteTodo(this.props.todo);
    } else {
      this.handleSubmit();
    }
  },

  breakOnEmptySubmit (e) {
    e.preventDefault();
    if (this.state.name != '') { this.handleSubmit(); }
    this.props.toggleEditing && this.props.toggleEditing();
  },

  // return when empty deletes the todo, blur when empty does nothing
  render () {
    return (
      <form className='todo-form' onSubmit={this.deleteOnEmptySubmit}>
        <input
          value={ this.state.name }
          ref='todoInput'
          onChange={ this.updateName }
          onBlur={ this.breakOnEmptySubmit }
        />
      </form>
    );
  }
});

export default TodoForm;
