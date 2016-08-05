import React, { PropTypes } from 'react'
import SessionUtil from '../util/session_util'

const LoginForm = React.createClass({

  contextTypes : {
    router: React.PropTypes.object.isRequired
  },

  getInitialState () {
    return {
      username: "",
      password: ""
    };
  },

  componentDidMount () {
    this.SessionStoreToken = SessionStore.addListener(this._checkUser)
  },

  _checkUser () {
    if (SessionStore.currentUser()) {
      this.context.router.push("/");
    }
  },

  render () {
    return (
      <div>
        <form onSubmit={this.executeSubmit}>
          <h1>Log In</h1>

          <input onChange={this.updateUsername}
            type="text"
            value={this.state.username}
            placeholder='Username' />
          <input onChange={this.updatePassword}
            type="password"
            value={this.state.password}
            placeholder='Password' />
          <Link
            to="/users/new">Need an account?
          </Link>
          <button>Submit</button>

        </form>
      </div>
    )
  },

  executeSubmit (e) {
    e.preventDefault();
    let router = this.context.router;

    SessionUtil.login(this.state)
  },

  updateUsername (e) {
    this.setState({ username: e.currentTarget.value });
  },

  updatePassword (e) {
    this.setState({ password: e.currentTarget.value });
  }

})

export default LoginForm
