import React from 'react';
import SessionStore from '../stores/session_store';
import ListStore from '../stores/list_store';
import ListUtil from '../util/list_util';

import ListView from './list_view';

const ListIndex = React.createClass({

	getInitialState () {
		return {
			currentUser: SessionStore.currentUser(),
			lists: ListStore.all()
		};
	},

	componentDidMount () {
		ListUtil.fetchUserLists();
		this.sessionStoreToken = SessionStore.addListener(this._updateSession);
		this.listStoreToken = ListStore.addListener(this._updateList);
	},

	_updateSession () {
		this.setState({ currentUser: SessionStore.currentUser() });
	},

	_updateList () {
		this.setState({ lists: ListStore.all() });
	},

	componentWillUnmount () {
		this.sessionStoreToken.remove();
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
