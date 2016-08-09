import React from 'react';
import TodoStore from '../stores/todo_store';
import TodoUtil from '../util/todo_util';
import TodoForm from './todo_form';

const ListView = React.createClass({
	getInitialState () {
		return {
			todos: this.props.list.todos
		};
	},

	// componentDidMount () {
	// 	// TodoUtil.fetchTodosByListId(this.props.list.id);
	// 	// this.todoStoreToken = TodoStore.addListener(this._onChange);
	// },
	//
	// _onChange () {
	// 	// this.setState({ todos: TodoStore.all() });
	// },
	//
	// componentWillUnmount() {
	// 	// this.todoStoreToken.remove();
	// },

  render () {
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
