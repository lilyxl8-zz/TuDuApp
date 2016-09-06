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
  },

  toggleEditing () {
    this.setState({ editing: !this.state.editing });
  },

  deleteTodo (e) {
    e.preventDefault();
    ListUtil.deleteTodo(this.props.todo);
  },

  render () {
    const todoDoneClass = this.props.todo.done ? 'todo-item done' : 'todo-item';

    return (
      <div className={todoDoneClass}>
        {
          (this.state.editing) ?
            <TodoForm
              todo={this.props.todo}
              toggleEditing={this.toggleEditing}
            />
           :
            <div>
              <div className='text-wrapper' onClick={this.toggleDone}>
                <a>{this.props.todo.name}</a>
              </div>
              <a onClick={this.deleteTodo} className='delete-todo'></a>
              <a onClick={this.toggleEditing} className='edit-todo'></a>
            </div>
        }
      </div>
    );
  }
});

export default TodoItem;
