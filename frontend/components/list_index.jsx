'use strict';

import React from 'react';

import ListStore from '../stores/list_store';
import ListUtil from '../utils/list_util';
import ListList from './list_list';

const blankList = { name: '', id: '' };

const ListIndex = React.createClass({
  // props:
  // children = ListStore.all()
  // animationDuration = 300ms
  // initialIndex = 0
  // width = 20% or this.props.showCount = 5

  // 2) write arrow fns (advance, retreat, have them update index)
  // 1) render subset of whole Lists array w/o animation (later limit to 150 at a time)
  //  (for calendar, show 15 days and fetch more)
  // write animation

  getInitialState () {
    return {
      index: 0,
      showCount: 5,
      animating: false,
      lists: ListStore.all().concat(blankList)
    };
  },

  componentDidMount () {
    ListUtil.fetchUserLists();
    this.listStoreToken = ListStore.addListener(this._updateLists);
  },

  _updateLists () {
    this.setState({ lists: ListStore.all().concat(blankList) });
  },

  componentWillUnmount () {
    this.listStoreToken.remove();
  },

  showCarouselItems () {
    const listStyle = { width: 100 / this.state.showCount + '%' };

    let minEnd = Math.min(this.state.lists.length, this.state.index + this.state.showCount);
    let listsToShow = this.state.lists.slice(this.state.index, minEnd);

    return (<ListList lists={listsToShow} listStyle={listStyle} />);
  },

  retreatOne (e) {
    e.preventDefault();
    this.setState({ index: this.state.index - 1 });
  },

  advanceOne (e) {
    e.preventDefault();
    this.setState({ index: this.state.index + 1 });
  },

  render () {
    // TODO make React carousel
    return (
      <div className='bg-app'>
        <div className='list-index'>
          {
            (this.state.index === 0) ?
              null : (
                <div className='nav-arrow nav-left' onClick={this.retreatOne}>
                  <img src='images/arrow.svg'></img>
                </div>
              )
          }

          <div className='lists-container-scroll'>
            <div className='lists-container'>
              { this.showCarouselItems() }
            </div>
          </div>

          {
            ((this.state.index + this.state.showCount) >= this.state.lists.length) ?
            null : (
              <div className='nav-arrow nav-right' onClick={this.advanceOne}>
                <img src='images/arrow.svg'></img>
              </div>
            )
          }
        </div>
      </div>
    );
  }
});

export default ListIndex;
