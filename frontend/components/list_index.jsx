import React from 'react';
import { Link } from 'react-router';

import ListStore from '../stores/list_store';
import ListUtil from '../utils/list_util';

import ListView from './list_view';
import ListForm from './list_form';

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

// <Link to='' className='app-logo'><img src='images/logo.png'></img></Link>

  render () {
		let blankList = { name: '' };

		let ourLists = () => {
			return (
				this.state.lists.map (list =>
					<ListView key={list.id} list={list} />
				)
			);
		};

    return (
      <div className='bg-app'>
				<div className='list-index'>
					<div className='nav-arrow'>
						<img src='images/arrow.svg'></img>
					</div>

					<div className='lists-container'>
						{ ourLists() }
						<ListForm list={blankList} />
					</div>

					<div className='nav-arrow'>
						<img src='images/arrow.svg'></img>
					</div>
				</div>
      </div>
    );
  }
});

export default ListIndex;
