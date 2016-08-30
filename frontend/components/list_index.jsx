import React from 'react';

import ListStore from '../stores/list_store';
import ListUtil from '../utils/list_util';

import ListView from './list_view';
import ListBlank from './list_blank';

const ListIndex = React.createClass({

  getInitialState () {
    return {
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
    const blankList = { name: '' };

    const divStyle = {
      width: (this.state.lists.length + 1) / 5 * 100 + '%'
    };

    const listStyle = {
      width: 98 / (this.state.lists.length + 1) + '%'
    };

    const ourLists = (
      this.state.lists.map (list =>
        <ListView key={ list.id } list={ list } style={ listStyle } />
      )
    );

    return (
      <div className='bg-app'>
        <div className='list-index'>
          <div className='nav-arrow nav-left'>
            <img src='images/arrow.svg'></img>
          </div>
          <div className='nav-arrow nav-right'>
            <img src='images/arrow.svg'></img>
          </div>

          <div className='lists-container-scroll'>
            <div className='lists-container' style={ divStyle }>
              { ourLists }
              <ListBlank list={ blankList } style={ listStyle } />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default ListIndex;
