import React from 'react'
import ReactDOM from 'react-dom'
import ReactRouter from 'react-router'

const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const browserHistory = ReactRouter.browserHistory;
const Link = ReactRouter.Link;

const TuDuApp = React.createClass({
  render () {
    return (
      <div>Hallo</div>
    )
  }
});

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
		<Router history={browserHistory}>
			<Route path= "/" component={TuDuApp}>
				<Route path= "users/new" component={SignupForm} />
				<Route path="login" component={LoginForm}/>
			</Route>
		</Router>,
		document.getElementById('main')
	);
});
