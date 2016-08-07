import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import SignupForm from './components/signup_form'
import SigninForm from './components/signin_form'
import NavBar from './components/navbar'

const TuDuApp = React.createClass({
  render () {
    return (
      <div>
        Hallo
        <NavBar />
        { this.props.children }
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
