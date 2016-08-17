import React from 'react';
import { Router, Link } from 'react-router';
import SessionUtil from '../utils/session_util';
import SessionStore from '../stores/session_store';

const NavOverlay = React.createClass({

  getInitialState () {
    return {
      currentUser: SessionStore.currentUser(),
			appView: !!SessionStore.currentUser()
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

		console.log(this.props.location.pathname);

		if (this.props.location.pathname != '/') {
			logo = () => {
				return (
					<Link to='/'>
						<img src='images/logo.png' className='app-logo'></img>
					</Link>
				);
			};
		} else {
			logo = () => {};
		}

    if (this.state.currentUser) {
      authText = () => {
        return (
					<div>
	          <Link to='/app'>
							Welcome, { this.state.currentUser.username }</Link>
						<Link to='/' onClick={ SessionUtil.logout }>
							Log out</Link>
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
			<div>
				<div className='bg-overlay'>
					{ logo() }
					<div className='nav-overlay group'>
		      	{ authText() }
					</div>
				</div>
			</div>
    );
  }
});

export default NavOverlay;
