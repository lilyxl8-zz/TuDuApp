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

  showCarouselItems () {
    let dateIdxs = []
    let datesToShow = []
    let date = new Date()
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
    return datesToShow
  },

  render () {
    return (
      <div className='list-index'>
        <div className={'nav-arrow nav-left' +
            ((0 == 0) ?
            ' shown' : '')
          }
          onClick={ this.retreatOne }>
          <img src='images/arrow.svg'></img>
        </div>

        <div className='lists-container-scroll'>
          {
            this.showCarouselItems().map((date, idx) => {
              return (
                <div key={ idx }>
                  { date.full_date }
                  {
                    date.todos.map((todo, idx) => {
                      return (
                        <div key={ idx }>
                          { todo.name }
                        </div>
                      )
                    })
                  }
                </div>
              )
            })
          }
        </div>
        <div className={
            'nav-arrow nav-right' +
            ((0 == 0) ?
            ' shown' : '')
          }
          onClick={ this.advanceOne }>
          <img src='images/arrow.svg'></img>
        </div>
      </div>
    )
  }
})

export default DateIndex
