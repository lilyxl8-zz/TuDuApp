import React from 'react';
import TodoItem from './todo_item';

const TodoList = React.createClass({
  getInitialState () {
    return {
      todos: this.props.todos
    };
  },

  render () {
    return this.state.list.todos.map(todo =>
      <TodoItem key={todo.id} todo={todo} />
    );
  }
});

export default TodoList;
