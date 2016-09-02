import React from 'react';
import TodoUtil from '../utils/todo_util'
import TodoStore from '../stores/todo_store'

const Calendar = React.createClass({

  getInitialState() {
    return {
      todos: TodoStore.all(),
      centerDate: new Date()      
    };
  },

  componentDidMount() {
    TodoUtil.fetchTodos();
    this.TodoStoreToken = TodoStore.addEventListener(this._onChange);
  },

  componentWillUnmount() {
    this.TodoStoreToken.remove();
  },

  _onChange() {
    this.setState({ todos: TodoStore.all() });
  }

  render () {
    return (

    );
  }
})

export default Calendar
