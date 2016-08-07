import React, { PropTypes } from 'react'
import UserUtil from '../util/user_util'
import SessionUtil from '../util/session_util'
import { Link } from 'react-router'

const SignupForm = React.createClass({

  contextTypes : {
    router: React.PropTypes.object.isRequired
  },

  getInitialState () {
    return {
      username: "",
      password: ""
    };
  },

  render () {
    return (
      <div>
        <form onSubmit={this.executeSubmit}>
          <h1>Sign Up</h1>

          <input onChange={this.updateUsername}
            type="text"
            value={this.state.username}
            placeholder='Username' />
          <input onChange={this.updatePassword}
            type="password"
            value={this.state.password}
            placeholder='Password (7 characters minimum)' />
          <Link
            to="/signin">Already have an account?
          </Link>
          <button>Submit</button>

        </form>
      </div>
    )
  },

  executeSubmit (e) {
    e.preventDefault();
    let router = this.context.router;

    UserUtil.createAccount(this.state, (credentials) => {
      SessionUtil.login(credentials, () => {
        router.push('/');
      });
    });
  },

  updateUsername (e) {
    this.setState({ username: e.currentTarget.value });
  },

  updatePassword (e) {
    this.setState({ password: e.currentTarget.value });
  }

})

export default SignupForm
