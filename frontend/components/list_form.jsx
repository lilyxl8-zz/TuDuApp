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
    document.getElementById('0').focus();
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
    for (let i = 0; i < 11; i++) {
      blankTodos.push(
        <div className='todo-item todo-form' key={i} onClick={this.focusListForm}></div>
      );
    }

    return (
      <div className='list-view'>
        <form className='list-name' onSubmit={this.handleSubmit}>
          <input
            id='0'
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
