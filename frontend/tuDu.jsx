import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import SessionUtil from './utils/session_util'
import SessionStore from './stores/session_store'

import NavOverlay from './components/nav_overlay'
import SignupForm from './components/signup_form'
import SigninForm from './components/signin_form'

import Landing from './components/landing'
import AppIndex from './components/app_index'

import '../app/assets/stylesheets/main.scss'

const TuDuApp = React.createClass({
  getInitialState () {
    return {
      currentUser: SessionStore.currentUser()
    }
  },

  componentDidMount () {
    SessionUtil.fetchCurrentUser()
    this.sessionStoreToken = SessionStore.addListener(this._updateSession)
  },

  _updateSession () {
    this.setState({ currentUser: SessionStore.currentUser() })
  },

  componentWillUnmount () {
    this.sessionStoreToken.remove()
  },

  render () {
    return (
      <div>
        <NavOverlay
          location={ this.props.location }
          currentUser={ this.state.currentUser }
        />
        { this.props.children }
      </div>
    )
  }
})

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path= '/' component={ TuDuApp }>
      <IndexRoute component={ Landing } />
      <Route path= 'app' name='app' component={ AppIndex } />
      <Route path= 'signup' name='signup' component={ SignupForm } />
      <Route path='signin' name='signin' component={ SigninForm }/>
    </Route>
  </Router>,
  document.getElementById('main')
)
