import React from 'react';
import SessionStore from '../stores/session_store';

const ListView = React.createClass({
  render () {
    let todoList = <h1>Not List!</h1>; // clean
    let isLoggedIn = SessionStore.isLoggedIn();

    if (isLoggedIn) {
      todoList = () => {
        return (
          <TodoForm />
        );
      };
    }

    return (
      <div className="list-view">
        {todoList}
      </div>
    );
  }
});

export default ListView;
