'use strict';

import React from 'react';

import ListStore from '../stores/list_store';
import ListUtil from '../utils/list_util';

import ListList from './list_list';
import ListView from './list_view';

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
      directionAdvance: false,
      lists: ListStore.all().concat({ name: '', id: '' })
    };
  },

  componentDidMount () {
    ListUtil.fetchUserLists();
    this.listStoreToken = ListStore.addListener(this._updateLists);
  },

  _updateLists () {
    this.setState({ lists: ListStore.all().concat({ name: '', id: '' }) });
  },

  componentWillUnmount () {
    this.listStoreToken.remove();
  },

  showCarouselItems () {
    let showArray = [];
    const listStyle = { width: 100 / this.state.showCount + '%' };

    if (this.state.lists[this.state.index].id ) {
      let max = Math.max(this.state.lists.length, this.state.index + this.state.showCount);
      for (let i = this.state.index; i < max; i++) {
        console.log(this.state.lists[i]);
        showArray.push(<ListView
          key={ this.state.lists[i].id }
          list={ this.state.lists[i] }
          style={ listStyle }
        />);
      }
    }

    return showArray;
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
          <div className='nav-arrow nav-left' onClick={this.retreatOne}>
            <img src='images/arrow.svg'></img>
          </div>

          <div className='lists-container-scroll'>
            <div className='lists-container'>
              { this.showCarouselItems() }
            </div>
          </div>

          <div className='nav-arrow nav-right' onClick={this.advanceOne}>
            <img src='images/arrow.svg'></img>
          </div>
        </div>
      </div>
    );
  }
});

export default ListIndex;
