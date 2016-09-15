'use strict'

import React from 'react'
import DateStore from '../stores/date_store'

import DateUtil from '../utils/date_util'

// returns UTC date, TODO get user's current timezone
// const today = new Date().toJSON().slice(0, 10)
let todayIdx = new Date()
todayIdx.setDate(todayIdx.getDate() - 2)
todayIdx = todayIdx.toJSON().slice(0, 10)

const DateIndex = React.createClass({
  getInitialState () {
    return {
      index: todayIdx,
      dates: DateStore.all()
    }
  },

  componentDidMount () {
    DateUtil.fetchUserDates()
    this.dateStoreToken = DateStore.addListener(this._updateDates)
  },

  _updateDates () {
    this.setState({ dates: DateStore.all() })
  },

  componentWillUnmount () {
    this.dateStoreToken.remove()
  },

  render () {
    return (
      <div>
        { this.state.index }
      </div>
    )
  }
})

export default DateIndex
