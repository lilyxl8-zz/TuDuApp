import React from 'react';
import ListUtil from '../utils/list_util';

const TodoItem = React.createClass({
  getInitialState () {
		console.log(this.props.todo);
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
		console.log(this.state.todo);
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
    ListUtil.updateTodo(this.state.todo);
		this.toggleEditing(e);
  },

  render () {
		let todoEl;
		let doneClass='todo-item';
		if (this.state.todo.done) { doneClass += ' done'; }

		if (this.state.editing) {
			todoEl = () => {
				return (
				<form className='todo-form' onSubmit={this.handleSubmit}>
          <input
            placeholder="+"
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
					<div className={doneClass}><a onClick={this.toggleDone}>{this.state.todo.name}</a> <a onClick={this.toggleEditing}>ed</a></div>
				);
			};
		}

    return (
      <div>
        { todoEl() }
      </div>
    );
  }
});

export default TodoItem;
