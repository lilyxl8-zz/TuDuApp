import React from 'react';
import ListUtil from '../utils/list_util';
import TodoBlanks from './todo_blanks';

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
    return (
      <div className='list-view'>
        <form className='list-name' onSubmit={this.handleSubmit}>
          <input
            id='0'
            placeholder='New List...'
            value={this.state.list.name}
            onChange={this.updateName}
            onBlur={this.toggleEditing} />
        </form>
        <div className='list-todos'>
          <TodoBlanks numBlanks='10' />
        </div>
      </div>
    );
  }
});

export default ListForm;
