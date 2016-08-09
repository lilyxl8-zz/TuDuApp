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
		// console.log(this.props);

    let todoList = () => {
			this.state.todos.map(todo =>
				<div>
					<TodoForm name={todo.name} />
				</div>
			);
		};

    return (
      <div className="list-view">
        {todoList()}
				<TodoForm />
      </div>
    );
  }
});

export default ListView;
