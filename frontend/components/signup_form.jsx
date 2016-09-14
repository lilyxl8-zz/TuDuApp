import React from 'react'
import { Link } from 'react-router'
import UserUtil from '../utils/user_util'
import SessionUtil from '../utils/session_util'

const SignupForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState () {
    return {
      username: '',
      password: ''
    }
  },

  executeSubmit (e) {
    e.preventDefault()
    let router = this.context.router

    UserUtil.createAccount(this.state, (credentials) => {
      SessionUtil.login(credentials, () => {
        router.push('/app')
      })
    })
  },

  updateUsername (e) {
    this.setState({ username: e.currentTarget.value })
  },

  updatePassword (e) {
    this.setState({ password: e.currentTarget.value })
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
            placeholder='Password (minimum 7 chars)' />
          <div className='auth-text'>
            <Link
              to="/signin">
              Already have an account?
            </Link>
          </div>
          <button>Sign up</button>
        </form>
      </div>
    )
  }
})

export default SignupForm
