import React from 'react';
// import SessionStore from '../stores/session_store';
import ListStore from '../stores/list_store';
import ListUtil from '../utils/list_util';
// import SessionUtil from '../utils/session_util';

import ListView from './list_view';

const ListIndex = React.createClass({

	getInitialState () {
		return {
			lists: ListStore.all()
		};
	},

	componentDidMount () {
		ListUtil.fetchUserLists();
		this.listStoreToken = ListStore.addListener(this._updateList);
	},

	_updateList () {
		console.log("update");
		this.setState({ lists: ListStore.all() });
	},

	componentWillUnmount () {
		this.listStoreToken.remove();
	},

  render () {
		let ourLists = () => {
			return (
				this.state.lists.map (list =>
					<ListView key={list.id} list={list} />
				)
			);
		};

    return (
      <div className="list-index">
				{ ourLists() }
      </div>
    );
  }
});

export default ListIndex;
