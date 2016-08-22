import React from 'react';

const Landing = React.createClass({
	render () {
		return (
			<div className='jumbotron'>
				<div className='title'>
					<img src='/app/assets/images/logo.png' />
					<h3>Just to-dos. No filler.</h3>
				</div>
			</div>
		);
	}
});

export default Landing;
