import React from 'react';
import { Link } from 'react-router';

import SessionUtil from '../utils/session_util';
import SessionStore from '../stores/session_store';

const NavOverlay = React.createClass({
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
    let authText, logo;



    if (this.state.currentUser) {
      authText = () => {
        return (
					<div>
	          <Link to='/app'>Welcome, { this.state.currentUser.username }</Link>
	          <Link to='/' onClick={ SessionUtil.logout }>Log out</Link>
					</div>
        );
      };
    } else {
      authText = () => {
        return (
					<div>
	          <Link to='/'>Home</Link>
	          <Link to='/signup'>Sign up</Link>
	          <Link to='/signin'>Sign in</Link>
					</div>
        );
      };
    }

    return (
			<div className='bg-overlay'>
				<Link to='/'><img src='images/logo.png' className='app-logo'></img></Link>
				<div className='nav-overlay group'>
	      	{ authText() }
				</div>
			</div>
    );
  }
});

export default NavOverlay;