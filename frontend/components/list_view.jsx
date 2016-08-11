import React from 'react';
import ListStore from '../stores/list_store';
import TodoForm from './todo_form';

const ListView = React.createClass({
	getInitialState () {
		return {
			todos: this.props.list.todos
		};
	},

	componentDidMount () {
		this.listStoreToken = ListStore.addListener(this._updateList);
	},

	_updateList () {
		this.setState({ todos: this.props.list.todos });
	},

	componentWillUnmount () {
		this.listStoreToken.remove();
	},

  render () {
		let blankTodo = {name: '', list_id: this.props.list.id };

    let todoList = () => {
			console.log(blankTodo);
			return this.state.todos.map(todo =>
				<TodoForm key={todo.id} todo={todo} />
			);
		};

    return (
      <div className="list-view">
				<h1>{this.props.list.name}</h1>
        { todoList() }
				<TodoForm todo={blankTodo}/>
      </div>
    );
  }
});

export default ListView;
