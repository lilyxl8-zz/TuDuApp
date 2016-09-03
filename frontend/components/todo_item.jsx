import React from 'react';
import ListUtil from '../utils/list_util';

const TodoItem = React.createClass({
  getInitialState () {
    return {
      // TODO swap out for Name and Done states
      todo: this.props.todo,
      editing: false
    };
  },

  updateName (e) {
    let newTodo = this.state.todo;
    newTodo.name = e.currentTarget.value;
    this.setState({todo: newTodo});
  },

  toggleDone (e) {
    e.preventDefault();
    let newTodo = this.state.todo;
    newTodo.done = !newTodo.done;
    ListUtil.updateTodo(newTodo);
  },

  toggleEditing (e) {
    e.preventDefault();
    this.setState({ editing: !this.state.editing });
  },

  handleSubmit (e) {
    e.preventDefault();
    if (this.state.todo.name === '') {
      ListUtil.deleteTodo(this.state.todo);
    } else {
      ListUtil.updateTodo(this.state.todo);
    }
    this.toggleEditing(e);
  },

  deleteTodo (e) {
    e.preventDefault();
    ListUtil.deleteTodo(this.state.todo);
  },

  todoEl () {
    return (this.state.editing) ?
     (
      <form className='todo-form' onSubmit={this.handleSubmit}>
        <input
          value={this.state.todo.name}
          onChange={this.updateName}
          onBlur={this.toggleEditing}
          autoFocus />
      </form>
    ) : (
      <div>
        <div className='text-wrapper' onClick={this.toggleDone}>
          <a>{this.state.todo.name}</a>
        </div>
        <a onClick={this.deleteTodo} className='delete-todo'></a>
        <a onClick={this.toggleEditing} className='edit-todo'></a>
      </div>
    );
  },

  render () {
    let todoDoneClass = 'todo-item';
    if (this.state.todo.done) { todoDoneClass += ' done'; }

    return (
      <div className={todoDoneClass}>
        { this.todoEl() }
      </div>
    );
  }
});

export default TodoItem;
