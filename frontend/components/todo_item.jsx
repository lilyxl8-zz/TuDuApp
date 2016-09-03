import React from 'react';
import ListUtil from '../utils/list_util';
import TodoForm from './todo_form';

const TodoItem = React.createClass({
  getInitialState () {
    return {
      name: this.props.todo.name,
      editing: false
    };
  },

  toggleDone (e) {
    e.preventDefault();
    let newTodo = this.props.todo;
    newTodo.done = !newTodo.done;
    ListUtil.updateTodo(newTodo);
    // ListUtil.toggleDone(this.props.todo);
    // TODO write toggle_done route
  },

  toggleEditing () {
    this.setState({ editing: !this.state.editing });
  },

  deleteTodo (e) {
    e.preventDefault();
    ListUtil.deleteTodo(this.props.todo);
  },

  todoEl () {
    return (this.state.editing) ?
      (
        <TodoForm todo={this.props.todo}
          onBlur={this.toggleEditing}
          submitCallback={ (todo) => {
            ListUtil.updateTodo(todo);
            this.toggleEditing();
          }
        } />
      ) : (
        <div>
          <div className='text-wrapper' onClick={this.toggleDone}>
            <a>{this.props.todo.name}</a>
          </div>
          <a onClick={this.deleteTodo} className='delete-todo'></a>
          <a onClick={this.toggleEditing} className='edit-todo'></a>
        </div>
      );
  },

  render () {
    let todoDoneClass = 'todo-item';
    if (this.props.todo.done) { todoDoneClass += ' done'; }

    return (
      <div className={todoDoneClass}>
        { this.todoEl() }
      </div>
    );
  }
});

export default TodoItem;
