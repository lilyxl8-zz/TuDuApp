import React from 'react';
import { Link } from 'react-router';
import ListUtil from '../utils/list_util';
import SessionUtil from '../utils/session_util';
import SessionStore from '../stores/session_store';

const SigninForm = React.createClass({

  contextTypes : {
    router: React.PropTypes.object.isRequired
  },

  getInitialState () {
    return {
      username: '',
      password: ''
    };
  },

  componentDidMount () {
    this.SessionStoreToken = SessionStore.addListener(this._checkUser);
  },

  _checkUser () {
		if (SessionStore.currentUser()) {
      this.context.router.push('');
    }
  },

  render () {
    return (
      <div className='auth-form'>
        <form onSubmit={this.executeSubmit}>
          <input onChange={this.updateUsername}
            type="text"
            value={this.state.username}
            placeholder='Username' />
          <br />
          <input onChange={this.updatePassword}
            type="password"
            value={this.state.password}
            placeholder='Password' />
          <Link
            to="/signup" className='auth-text'>Need an account?
          </Link>
          <button>Sign in</button>

        </form>
      </div>
    );
  },

  executeSubmit (e) {
    e.preventDefault();
    SessionUtil.login(this.state);
  },

  updateUsername (e) {
    this.setState({ username: e.currentTarget.value });
  },

  updatePassword (e) {
    this.setState({ password: e.currentTarget.value });
  }

});

export default SigninForm;
