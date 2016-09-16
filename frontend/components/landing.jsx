import React from 'react'
import { Link } from 'react-router'
import SessionStore from '../stores/session_store'
import ListIndex from './list_index'

const Landing = React.createClass({
  getInitialState () {
    return {
      isLoggedIn: SessionStore.isLoggedIn()
    }
  },

  componentDidMount () {
    this.sessionStoreToken = SessionStore.addListener(this._updateSession)
  },

  _updateSession () {
    this.setState({ isLoggedIn: SessionStore.isLoggedIn() })
  },

  componentWillUnmount () {
    this.sessionStoreToken.remove()
  },

  render () {
    return (
      <div>
        <div className='title'>
          <img src='images/logo.png' />
          <h3>Just to-dos. No filler.</h3>
        </div>
        {
          this.state.isLoggedIn ? (
            <Link className="jumbotron subheader" to='app'>
              <button>
                Get to it!
              </button>
            </Link>
          ) : (
            <div>
              <div className="jumbotron subheader text">Give it a try...</div>
              <div className='landing-demo'>
                <ListIndex
                  showCount={ 5 }
                  viewType={ 0 }
                />
                <div className="cta">
                  <h3>Ready to get stuff done?</h3>
                  <Link to="/signup">
                    <button>Sign up!</button>
                  </Link>
                </div>
              </div>
            </div>
          )
        }
      </div>
    )
  }
})

export default Landing
