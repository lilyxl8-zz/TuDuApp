import React from 'react';
import ListUtil from '../utils/list_util';
import ListStore from '../stores/list_store';
import TodoItem from './todo_item';
import TodoForm from './todo_form';

const ListView = React.createClass({
	getInitialState () {
		return {
			list: this.props.list,
			editing: false
		};
	},

	componentDidMount () {
		this.listStoreToken = ListStore.addListener(this._updateList);
	},

	_updateList () {
		this.setState({ list: this.props.list });
	},

	updateName (e) {
		let newList = this.state.list;
		newList.name = e.currentTarget.value;
    this.setState({ list: newList });
	},

	toggleEditing (e) {
		e.preventDefault();
		this.setState({ editing: !this.state.editing });
	},

	componentWillUnmount () {
		this.listStoreToken.remove();
	},

	handleSubmit (e) {
		e.preventDefault();
		ListUtil.updateList(this.state.list);
		this.toggleEditing(e);
	},

  render () {
		let blankTodo = {name: '', list_id: this.props.list.id };
		let nameForm;

		nameForm = () => {
			if (this.state.editing) {
				return (
				<form className='name-form' onSubmit={this.handleSubmit}>
				  <input
				    value={this.state.list.name}
				    onChange={this.updateName}
						onBlur={this.toggleEditing}
						autoFocus />
				</form>
				);
			} else {
				return (
				<h1 onClick={this.toggleEditing}>{this.state.list.name}</h1>
				);
			}
		};

    let todoList = () => {
			return this.state.list.todos.map(todo =>
				<TodoItem key={todo.id} todo={todo} />
			);
		};

    return (
      <div className="list-view">
				{ nameForm() }
        { todoList() }
				<TodoForm todo={blankTodo}/>
      </div>
    );
  }
});

export default ListView;
