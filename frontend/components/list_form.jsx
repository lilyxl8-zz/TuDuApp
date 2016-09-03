import React from 'react';
import ListUtil from '../utils/list_util';

const ListForm = React.createClass({
  getInitialState () {
    return {
      editing: false,
      name: this.props.list.name
    };
  },

  updateName (e) {
    e.preventDefault();
    this.setState({ name: e.currentTarget.value });
  },

  toggleEditing (e) {
    e.preventDefault();
    this.setState({ editing: !this.state.editing });
  },

  handleSubmit (e) {
    e.preventDefault();
    this.props.list.name = this.state.name;
    ListUtil.updateList(this.props.list);
    this.toggleEditing(e);
  },

  deleteList (e) {
    e.preventDefault();
    ListUtil.deleteList(this.props.list);
  },

  render () {
    return (
      (this.state.editing) ? (
        <div className='list-name'>
          <form className='name-form' onSubmit={ this.handleSubmit }>
            <input
              value={ this.state.name }
              onChange={ this.updateName }
              onBlur={ this.toggleEditing }
              autoFocus />
          </form>
        </div>
      ) : (
        <div className='list-name'>
          <h1 onClick={ this.toggleEditing }>
            { this.props.list.name }
          </h1>
          <a onClick={ this.deleteList } className='delete-list'></a>
        </div>
      )
    );
  }
});

export default ListForm;
