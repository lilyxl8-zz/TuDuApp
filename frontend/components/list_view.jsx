import React from 'react';
import TodoStore from '../stores/todo_store';
import TodoForm from './todo_form';

const ListView = React.createClass({
	getInitialState () {
		return {
			todos: TodoStore.all()
		};
	},

	componentDidMount () {
		this.todoStoreToken = TodoStore.addListener(this._onChange);
	},

	_onChange () {
		this.setState({ todos: TodoStore.all() });
	},

	componentWillUnmount() {
		this.todoStoreToken.remove();
	},

  render () {
    let todoList = () => {
			if (this.state.isLoggedIn) {
				return (
					<div>
						<TodoForm />
					</div>
				);
			} else {
				return (
					<h1>u w0t m8</h1>
				);
			}

		};


    return (
      <div className="list-view">
        {todoList()}
      </div>
    );
  }
});

export default ListView;
