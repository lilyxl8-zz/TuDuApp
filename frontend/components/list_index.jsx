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
      animating: false,
      directionAdvance: false,
      lists: ListStore.all()
    };
  },

  componentDidMount () {
    ListUtil.fetchUserLists();
    this.listStoreToken = ListStore.addListener(this._updateLists);
  },

  _updateLists () {
    this.setState({ lists: ListStore.all() });
  },

  componentWillUnmount () {
    this.listStoreToken.remove();
  },

  render () {
    // TODO make React carousel
    const listStyle = { width: 100 / 5 + '%' };

    const blankList = { name: '' };

    return (
      <div className='bg-app'>
        <div className='list-index'>
          <div className='nav-arrow nav-left'>
            <img src='images/arrow.svg'></img>
          </div>

          <div className='lists-container-scroll'>
            <div className='lists-container'>
              <ListList lists={ this.state.lists } listStyle= { listStyle }/>
              <ListView list={ blankList } style={ listStyle } />
            </div>
          </div>


          <div className='nav-arrow nav-right'>
            <img src='images/arrow.svg'></img>
          </div>
        </div>
      </div>
    );
  }
});

export default ListIndex;
