'use strict'

import React from 'react'
import ListStore from '../stores/list_store'
import ListUtil from '../utils/list_util'
import ListView from './list_view'

// TODO refactor DOM css
// TODO refactor router pushes for loggedIn

// TODO rewrite components as ES6 classes
// TODO fix demo autofocus on landing
// TODO for draggable, give lists a position idx

const ListIndex = React.createClass({
  propTypes: {
    showCount: React.PropTypes.number
  },

  getInitialState () {
    return {
      index: 0,
      lists: this.setListStore()
    }
  },

  setListStore () {
    if (this.props.isDemo) { ListStore.setDemo() }
    return ListStore.all()
  },

  componentDidMount () {
    if (!this.props.isDemo) { ListUtil.fetchUserLists() }
    this.listStoreToken = ListStore.addListener(this._updateLists)
  },

  _updateLists () {
    this.setState({ lists: ListStore.all() })
  },

  componentWillUnmount () {
    this.listStoreToken.remove()
  },

  maxIndex () {
    return this.state.index + this.props.showCount
  },

  retreatOne (e) {
    e.preventDefault()
    if (this.state.index === 0) { return }
    this.setState({ index: this.state.index - this.props.showCount })
  },

  advanceOne (e) {
    e.preventDefault()
    if (this.maxIndex() >= this.state.lists.length) { return }
    this.setState({ index: this.state.index + this.props.showCount })
  },

  showCarouselDots () {
    let dots = []
    for (let i = 0; i < Math.ceil(this.state.lists.length / 5); i++) {
      const isActive = (this.state.index >= i * 5 && this.state.index < i * 5 + 5) ? 'active' : null

      dots.push(
        <div key={i}
          className={ isActive }
          onClick={ (e) => {
            e.preventDefault()
            this.setState({ index: i * 5 })
          }
        } >
        ●
        </div>
      )
    }
    return dots
  },

  showCarouselItems () {
    const listStyle = { width: 100 / this.props.showCount + '%' }

    const minEnd = Math.min(this.state.lists.length, this.maxIndex())
    const listsToShow = this.state.lists.slice(this.state.index, minEnd)

    return (
      <div className='lists-container'>
      {
        listsToShow.map((list, idx) => {
          const keyVal = this.props.isDemo ? this.state.index + idx : list.id
          const isForm = (this.state.index + idx === this.state.lists.length - 1)

          return (
            <ListView
              key={ keyVal }
              list={ list }
              style={ listStyle }
              isDemo={ this.props.isDemo }
              isForm={ isForm }
            />
          )
        })
      }
      </div>
    )
  },

  render () {
    return (
      <div className='list-index'>
        <div className={'nav-arrow nav-left' +
            ((this.state.index === 0) ?
            '' : ' shown')
          }
          onClick={ this.retreatOne }>
          <img src='images/arrow.svg'></img>
        </div>

        <div className='lists-container-scroll'>
          <div className='list-carousel-dots'>
            { this.showCarouselDots() }
          </div>

          { this.showCarouselItems() }
        </div>
        <div className={
            'nav-arrow nav-right' +
            ((this.maxIndex() >= this.state.lists.length) ?
            '' : ' shown')
          }
          onClick={ this.advanceOne }>
          <img src='images/arrow.svg'></img>
        </div>
      </div>
    )
  }
})

export default ListIndex
