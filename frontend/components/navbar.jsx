import React from 'react';
import { Link } from 'react-router';

import SessionUtil from '../utils/session_util';
import SessionStore from '../stores/session_store';

const NavBar = React.createClass({
  getInitialState () {
    return {
      currentUser: SessionStore.currentUser()
    };
  },

  componentDidMount () {
    this.SessionStoreToken = SessionStore.addListener(this._onChange);
  },

  _onChange () {
    this.setState({ currentUser: SessionStore.currentUser() });
  },

  componentWillUnmount () {
    this.SessionStoreToken.remove();
  },

  render () {
    let authText;

    if (this.state.currentUser) {
      authText = () => {
        return (
          <div className='auth-btns group'>
            <Link to='/app'>Welcome, { this.state.currentUser.username }</Link>!
            <Link to='/' onClick={ SessionUtil.logout }>Log out</Link>
          </div>
        );
      };
    } else {
      authText = () => {
        return (
          <div className='auth-btns group'>
            <Link to='/signup'>Sign up</Link>
            <Link to='/signin'>Sign in</Link>
          </div>
        );
      };
    }

    return (
      <div className='navbar'>
        { authText() }
      </div>
    );
  }
});

export default NavBar;
