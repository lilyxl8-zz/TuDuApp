import React from 'react';
import { Link } from 'react-router'

import SessionUtil from '../util/session_util';
import SessionStore from '../stores/session_store';

const NavBar = React.createClass({
  getInitialState () {
    return {
      currentUser: SessionStore.currentUser()
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
    if (!!this.state.currentUser) {
      return (
        <div>
          {this.state.currentUser.username}
          <Link to='/' onClick={ SessionUtil.logout }>Log out</Link>
        </div>
      );

    } else {
      return (
        <div>
          <Link to='/signup'>Sign up</Link>
          <Link to='/signin'>Sign in</Link>
        </div>
      );
    }
  }
})

export default NavBar
