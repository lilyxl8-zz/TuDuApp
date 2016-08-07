import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import SignupForm from './components/signup_form'
import LoginForm from './components/login_form'

const TuDuApp = React.createClass({
  render () {
    return (
      <div>
        Hallo
        { this.props.children }
        <Link to='users/new'>Sign up here</Link>
      </div>
    )
  }
})

document.addEventListener("DOMContentLoaded", () => {
  render(
		<Router history={browserHistory}>
			<Route path= "/" component={TuDuApp}>
				<Route path= "/users/new" component={SignupForm} />
				<Route path="/" component={LoginForm}/>
			</Route>
		</Router>,
		document.getElementById('main')
	)
})
