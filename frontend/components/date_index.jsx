'use strict'

import React from 'react'
import DateStore from '../stores/date_store'

import DateUtil from '../utils/date_util'
import DateView from './date_view'

// returns UTC date, TODO get user's current timezone
// const today = new Date().toJSON().slice(0, 10)
let todayDate = new Date()
let currDate = new Date()
currDate.setDate(todayDate.getDate() - 2)

// TODO today button
// top divider - put quotes
// navigate by calendar
// handle login errors
// add demo login EASY 1)
// multiline comment box for ListForm

const DateIndex = React.createClass({
  getInitialState () {
    return {
      idxDate: currDate,
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

  advanceOne (e) {
    e.preventDefault()
    currDate.setDate(currDate.getDate() + 1)
    this.setState({ idxDate: currDate })
  },

  retreatOne (e) {
    e.preventDefault()
    currDate.setDate(currDate.getDate() - 1)
    this.setState({ idxDate: currDate })
  },

  showCarouselItems () {
    let dateIdxs = []
    let datesToShow = []
    let date = this.state.idxDate
    let d = date.getDate()
    let m = date.getMonth()
    let y = date.getFullYear()

    for (let i = 0; i < 5; i++) {
      let curDate = new Date(y, m, d + i).toJSON().slice(0, 10)
      dateIdxs.push(curDate)
    }

    for (var i = 0; i < dateIdxs.length; i++) {
      let queryDate = this.state.dates[dateIdxs[i]]
      queryDate ?
        datesToShow.push(queryDate) :
        datesToShow.push({ full_date: dateIdxs[i], todos: [] })
    }

    const listStyle = { width: 100 / this.props.showCount + '%' }
    return (
      <div className='lists-container'>
        {
          datesToShow.map((date, idx) => {
            return (
              <DateView
                key={ idx }
                date={ date }
                style={ listStyle }
                viewType={ 2 }
              />
            )
          })
        }
      </div>
    )
  },

  render () {
    return (
      <div className='date-index'>
        <div className={ 'nav-arrow nav-left shown' }
          onClick={ this.retreatOne }>
          <img src='images/arrow.svg'></img>
        </div>

        <div className='list-carousel-dots'>
          &#8220;Stay in your lane.&#8221;
        </div>

        <div className='lists-container-scroll'>
          {
            this.showCarouselItems()
          }
        </div>
        <div className={ 'nav-arrow nav-right shown' }
          onClick={ this.advanceOne }>
          <img src='images/arrow.svg'></img>
        </div>
      </div>
    )
  }
})

export default DateIndex
