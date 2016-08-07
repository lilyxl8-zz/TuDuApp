import React from 'react';

import SessionUtil from '../util/session_util';
import SessionStore from '../stores/session_store';

const NavBar = React.createClass({
  getInitialState () {
    return {
      currentUser: SessionUtil.currentUser()
    }
  },

  componentDidMount () {
    this.SessionStoreToken = SessionStore.addListener(this._onChange);
    SessionUtil.fetchCurrentUser( () => {
      this.setState({ currentUser: SessionStore.currentUser() });
    });
  },

  _onChange () {
    this.setState({ currentUser: SessionStore.currentUser() });
  },

  componentWillUnmount () {
    this.SessionStoreToken.remove();
  },

  render () {
    return (
      <div>
        {this.state.currentUser.username}
      </div>
    )
  }
})

export default NavBar
