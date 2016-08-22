import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import SessionUtil from './utils/session_util';
import SessionStore from './stores/session_store';

import NavOverlay from './components/nav_overlay';
import SignupForm from './components/signup_form';
import SigninForm from './components/signin_form';

import Landing from './components/landing';
import ListIndex from './components/list_index';

const TuDuApp = React.createClass({
	getInitialState () {
		return {
			currentUser: SessionStore.currentUser()
		};
	},

	componentDidMount () {
		SessionUtil.fetchCurrentUser();
		this.sessionStoreToken = SessionStore.addListener(this._updateSession);
	},

	_updateSession () {
		this.setState({ currentUser: SessionStore.currentUser() });
	},

  render () {
    return (
      <div>
				<NavOverlay />
				{ this.props.children }
      </div>
    );
  }
});

$(document).ready( () => {
  ReactDOM.render(
		<Router history={browserHistory}>
			<Route path= '/' component={TuDuApp}>
				<Route path= 'signup' name='signup' component={SignupForm} />
				<Route path='signin' name='signin' component={SigninForm}/>
			</Route>
		</Router>,
		document.getElementById('main')
	);
});
