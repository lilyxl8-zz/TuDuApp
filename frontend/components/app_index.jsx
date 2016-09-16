'use strict'

import React from 'react'
import ListIndex from './list_index'
import DateIndex from './date_index'
import SessionStore from '../stores/session_store'

const AppIndex = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  componentDidMount () {
    this.sessionStoreToken = SessionStore.addListener(this._checkLoggedIn)
  },

  componentWillUnmount () {
    this.sessionStoreToken.remove()
  },

  _checkLoggedIn () {
    if (!SessionStore.currentUser()) {
      this.context.router.push('/')
    }
  },

  render () {
    return (
      <div className='bg-app'>
        <DateIndex />
        <ListIndex
          viewType={ 1 }
          showCount={ 5 }
        />
      </div>
    )
  }
})

export default AppIndex
