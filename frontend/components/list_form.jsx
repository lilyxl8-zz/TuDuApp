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

  handleSubmit (e) {
    e.preventDefault();
    ListUtil.createList(this.state.list);
		let newList = this.state.list;
		newList.name = '';
    this.setState({ list: newList });
  },

  render () {
    return (
      <div className="list-view">
				<form className='name-form' onSubmit={this.handleSubmit}>
				  <input
						placeholder='+'
						value={this.state.list.name}
				    onChange={this.updateName}
						onBlur={this.toggleEditing}
						autoFocus />
				</form>
      </div>
    );
  }
});

export default ListForm;
