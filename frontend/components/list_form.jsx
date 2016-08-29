import React from 'react';
import ListUtil from '../utils/list_util';

const ListForm = React.createClass({
  getInitialState () {
    return {
      list: this.props.list
    };
  },

  updateName (e) {
    let newList = this.state.list;
    newList.name = e.currentTarget.value;
    this.setState({ list: newList });
  },

  focusListForm (e) {
    e.preventDefault();
    this.refs.listForm.focus();
  },

  handleSubmit (e) {
    e.preventDefault();
    ListUtil.createList(this.state.list);
    let newList = this.state.list;
    newList.name = '';
    this.setState({ list: newList });
  },

  render () {
    let blankTodos = [];
    for (let i = 0; i < 10; i++) {
      blankTodos.push(
        <div className='todo-item todo-form' key={i} onClick={this.focusListForm}></div>
      );
    }

    return (
      <div className='list-view' style={ this.props.style }>
        <form className='list-name' onSubmit={this.handleSubmit}>
          <input
            ref='listForm'
            placeholder='New List...'
            value={this.state.list.name}
            onChange={this.updateName}
            onBlur={this.toggleEditing} />
        </form>
        <div className='list-todos'>
          { blankTodos }
        </div>
      </div>
    );
  }
});

export default ListForm;
