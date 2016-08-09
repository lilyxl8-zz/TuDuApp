import React from 'react';
import SessionStore from '../stores/session_store';

import ListView from './components/list_view';

const ListIndex = React.createClass({

	getInitialState () {
		return {
			isLoggedIn: SessionStore.isLoggedIn()
		};
	},

	componentDidMount () {
		this.sessionStoreToken = SessionStore.addListener(this._onChange);
	},

	_onChange () {
		this.setState({isLoggedIn: SessionStore.isLoggedIn()});
	},

	componentWillUnmount () {
		this.sessionStoreToken.remove();
	},


  render () {
    return (
      <div className="list-index">
      </div>
    );
  }
});

export default ListIndex;
