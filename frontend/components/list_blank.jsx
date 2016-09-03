import React from 'react';
import ListUtil from '../utils/list_util';

const ListBlank = React.createClass({
  getInitialState () {
    return {
      name: ''
    };
  },

  updateName (e) {
    e.preventDefault();
    this.setState({ name: e.currentTarget.value });
  },

  focusListBlank (e) {
    e.preventDefault();
    this.refs.listForm.focus();
  },

  handleSubmit (e) {
    e.preventDefault();
    ListUtil.createList(this.state.name);
    this.setState({ name: '' });
  },

  blankTodos () {
    // TODO put focusListBlank() on parent container
    let _blankTodos = [];
    for (let i = 0; i < 10; i++) {
      _blankTodos.push(
        <div className='todo-item todo-form' key={i} onClick={this.focusListBlank}></div>
      );
    }
    return _blankTodos;
  },

  render () {
    //TODO use ListForm
    return (
      <div className='list-view' style={ this.props.style }>
        <form className='list-name' onSubmit={this.handleSubmit}>
          <input
            ref='listForm'
            placeholder='New List...'
            value={this.state.name}
            onChange={this.updateName}
            onBlur={this.toggleEditing} />
        </form>
        <div className='list-todos'>
          { this.blankTodos() }
        </div>
      </div>
    );
  }
});

export default ListBlank;
