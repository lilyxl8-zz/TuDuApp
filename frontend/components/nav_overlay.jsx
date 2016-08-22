import React from 'react';
import { Link } from 'react-router';

import SessionUtil from '../utils/session_util';
import SessionStore from '../stores/session_store';

import Landing from './landing';
import ListIndex from './list_index';

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

	setAppView (boolean) {
		this.state.appView = boolean;
	},

  componentWillUnmount () {
    this.SessionStoreToken.remove();
  },

  render () {
    let authText, logo, componentView;

		if (this.state.appView) {
			logo = () => {
				return (
					<Link to='/' onClick={ () =>
						{ this.setAppView(false); } }>
						<img src='images/logo.png' className='app-logo'></img>
					</Link>
				);
			};

			componentView = () => {
				return (
					<ListIndex />
				);
			};
		} else {
			logo = () => {};
			if ('/') {
				componentView = () => {
					return (
						<Landing />
					);
				};
			} else {
				componentView = () => {};
			}
		}

    if (this.state.currentUser) {
      authText = () => {
        return (
					<div>
	          <Link to='/' onClick={ () =>
							{ this.setAppView(true); } }>
							Welcome, { this.state.currentUser.username }</Link>
						<Link to='/' onClick={
							SessionUtil.logout(this.setAppView(false)) }>
							Log out</Link>
					</div>
        );
      };
    } else {
      authText = () => {
        return (
					<div>
	          <Link to='/'
							onClick={ () =>
								{ this.setAppView(false); }
							}>
							Home</Link>
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
				{ componentView() }
			</div>
    );
  }
});

export default NavOverlay;
