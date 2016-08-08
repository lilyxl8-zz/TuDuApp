import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import SessionStore from '../stores/session_store'

import SignupForm from './components/signup_form'
import SigninForm from './components/signin_form'
import NavBar from './components/navbar'
import ListView from './components/list_view'

const TuDuApp = React.createClass({
  let loggedIn = SessionStore.isLoggedIn();
  let TodoList;

  if (loggedIn) {
    TodoList = () => {
      return (
        <ListView />
      );
    }
  }

  render () {
    return (
      <div>
        <NavBar />
        { this.props.children }
        { TodoList }
      </div>
    )
  }
})

document.addEventListener("DOMContentLoaded", () => {
  render(
		<Router history={browserHistory}>
			<Route path= "/" component={TuDuApp}>
				<Route path= "/signup" component={SignupForm} />
				<Route path="/signin" component={SigninForm}/>
			</Route>
		</Router>,
		document.getElementById('main')
	)
})
