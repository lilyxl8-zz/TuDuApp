import React from 'react';
import ListUtil from '../utils/list_util';

const TodoForm = React.createClass({
  getInitialState () {
    return {
      todo: this.props.todo
    };
  },

  updateName (e) {
		let newTodo = this.state.todo;
		newTodo.name = e.currentTarget.value;
    this.setState({todo: newTodo});
  },

  handleSubmit (e) {
    e.preventDefault();
    ListUtil.createTodo(this.state.todo);
		let newTodo = this.state.todo;
		newTodo.name = '';
    this.setState({todo: newTodo});
  },

  render () {
    return (
      <div>
        <form className='todo-form' onSubmit={this.handleSubmit}>
          <input
            placeholder="+"
            value={this.state.todo.name}
            onChange={this.updateName} />
        </form>
      </div>
    );
  }
});

export default TodoForm;
