import React from 'react';
import TodoStore from '../stores/todo_store';
import TodoForm from './todo_form';

const ListView = React.createClass({
	getInitialState () {
		return {
			todos: this.props.list.todos
		};
	},

  render () {
    let todoList = () => {
			this.state.todos.map(todo =>
				<TodoForm name={todo.name} />
			);
		};

    return (
      <div className="list-view">
				<h1>{this.props.list.name}</h1>
        {todoList()}
				<TodoForm />
      </div>
    );
  }
});

export default ListView;
