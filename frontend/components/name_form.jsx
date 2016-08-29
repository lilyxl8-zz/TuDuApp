import React from 'react';

const NameForm = React.createClass({
  getInitialState () {
    return {
      editing: this.props.editing
    };
  },

  render () {
    return (
      (this.state.editing) ? (
        <div className='list-name'>
          <form className='name-form' onSubmit={this.handleSubmit}>
            <input
              value={this.state.list.name}
              onChange={this.updateName}
              onBlur={this.toggleEditing}
              autoFocus />
          </form>
        </div>
      ) : (
        <div className='list-name'>
          <h1 onClick={this.toggleEditing}>
            {this.props.name}
          </h1>
          <a onClick={this.deleteList} className='delete-list'></a>
        </div>
      )
    );
  }
});

export default NameForm;
