import React from 'react';
import { Link } from 'react-router'

const TodoItem = React.createClass({
  getInitialState () {
    return {
      currentUser: this.props.currentUser; // passed from parent
    }
  },

  componentDidMount () {
  },

  _onChange () {
  },

  componentWillUnmount () {
    this.SessionStoreToken.remove();
  },

  render () {
    return (
      <div className='todo-item'>
        { authText() }
      </div>
    );
  }
})

export default TodoItem
