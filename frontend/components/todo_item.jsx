import React from 'react';
import ListUtil from '../utils/list_util';

const TodoItem = React.createClass({
  getInitialState () {
    return {
      todo: this.props.todo,
			editing: false
    };
  },

  updateName (e) {
		let newTodo = this.state.todo;
		newTodo.name = e.currentTarget.value;
    this.setState({todo: newTodo});
  },

	toggleDone (e) {
		e.preventDefault();
		let newTodo = this.state.todo;
		newTodo.done = !newTodo.done;
		ListUtil.updateTodo(newTodo);
	},

	toggleEditing (e) {
		e.preventDefault();
		this.setState({ editing: !this.state.editing });
	},

  handleSubmit (e) {
    e.preventDefault();
		if (this.state.todo.name === '') {
			ListUtil.deleteTodo(this.state.todo);
		} else {
			ListUtil.updateTodo(this.state.todo);
		}
		this.toggleEditing(e);
  },

	deleteTodo (e) {
		e.preventDefault();
		ListUtil.deleteTodo(this.state.todo);
	},

  render () {
		let todoEl
		let todoDoneClass = 'todo-item';
		if (this.state.todo.done) { todoDoneClass += ' done'; }

		if (this.state.editing) {
			todoEl = () => {
				return (
				<form className='todo-form' onSubmit={this.handleSubmit}>
          <input
            value={this.state.todo.name}
            onChange={this.updateName}
						onBlur={this.toggleEditing}
						autoFocus />
        </form>
				);
			};
		} else {
			todoEl = () => {
				return (
					<div>
						<div className='text-wrapper' onClick={this.toggleDone}>
							<a>{this.state.todo.name}</a>
						</div>
						<a onClick={this.deleteTodo} className='delete-todo'></a>
						<a onClick={this.toggleEditing} className='edit-todo'></a>
					</div>
				);
			};
		}

    return (
			<div className={todoDoneClass}>
        { todoEl() }
      </div>
    );
  }
});

export default TodoItem;
