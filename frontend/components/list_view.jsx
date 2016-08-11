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
			return this.state.todos.map(todo =>
				<TodoForm key={todo.id} name={todo.name} />
			);
		};
		console.log(todoList());

    return (
      <div className="list-view">
				<h1>{this.props.list.name}</h1>
        { todoList() }
				<TodoForm />
      </div>
    );
  }
});

export default ListView;
