import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import SessionUtil from './utils/session_util';
import SessionStore from './stores/session_store';

import SignupForm from './components/signup_form';
import SigninForm from './components/signin_form';
import NavBar from './components/navbar';
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
		console.log('hi');
		this.setState({ currentUser: SessionStore.currentUser() });
	},

  render () {
		let listIndex = () => {
			if (SessionStore.currentUser()) {
				return <ListIndex /> ;
			}
		};
    return (
      <div>
        <NavBar />
        { this.props.children }
        { listIndex() }
      </div>
    );
  }
});

document.addEventListener('DOMContentLoaded', () => {
  render(
		<Router history={browserHistory}>
			<Route path= '/' component={TuDuApp}>
				<Route path= '/signup' component={SignupForm} />
				<Route path='/signin' component={SigninForm}/>
			</Route>
		</Router>,
		document.getElementById('main')
	);
});
