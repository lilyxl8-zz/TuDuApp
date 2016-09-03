import React from 'react';
import ListStore from '../stores/list_store';
import TodoItem from './todo_item';

const TodoList = React.createClass({
  getInitialState () {
    return {
      todos: this.props.todos
    };
  },

  componentDidMount () {
    this.listStoreToken = ListStore.addListener(this._updateTodos);
  },

  _updateTodos () {
    this.setState({ todos: this.props.todos });
  },

  componentWillUnmount () {
    this.listStoreToken.remove();
  },

  render () {
    let todoItems = this.props.todos.map(todo =>
      <TodoItem key={todo.id} todo={todo} />
    );
    return (
      <div>
        { todoItems }
      </div>
    );
  }
});

export default TodoList;
