import React from 'react';

const TodoForm = React.createClass({
  getInitialState () {
    return {
      name: this.props.todo.name,
      submitCb: this.props.submitCallback // create or update todo
    };
  },

  updateName (e) {
    e.preventDefault();
    this.setState({ name: e.currentTarget.value });
  },

  handleSubmit (e) {
    e.preventDefault();
    let newTodo = this.props.todo;
    newTodo.name = this.state.name;
    this.state.submitCb.apply(this, [newTodo]);
  },

  render () {
    return (
      <form className='todo-form' onSubmit={this.handleSubmit}>
        <input
          value={this.state.name}
          onChange={this.updateName}
        />
      </form>
    );
  }
});

export default TodoForm;
