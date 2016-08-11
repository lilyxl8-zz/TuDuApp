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
				<TodoForm key={todo.id} todo={todo} />
			);
		};

		let todo = {name: '', list_id: this.props.list.id };
    return (
      <div className="list-view">
				<h1>{this.props.list.name}</h1>
        { todoList() }
				<TodoForm todo={todo}/>
      </div>
    );
  }
});

export default ListView;
