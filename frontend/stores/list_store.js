import { Store } from 'flux/utils';
import ListConstants from '../constants/list_constants';
import AppDispatcher from '../dispatcher/dispatcher';

const ListStore = new Store(AppDispatcher);

let _lists = [];

ListStore.replaceList = (list) => {
  // let replaced = false;

  // _lists = _lists.map( (el) => {
  //   if (el.id === list.id) {
  //     replaced = true;
  //     return list;
  //   } else {
  //     return el;
  //   }
  // });

	for (let i = 0; i < _lists.length; i++) {
		if (_lists[i].id === list.id) {
			// replaced = true;
			_lists[i] = list;
			return;
		}
	}

	_lists.push(list);

  // if (!replaced) {
  //
  // }
};

ListStore.clearLists = () => {
	_lists = [];
};

ListStore.all = () => {
  return _lists;
};

ListStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case ListConstants.LISTS_RECEIVED:
			console.log('LISTS_RECEIVED');
			_lists = payload.lists;
			ListStore.__emitChange();
			break;
		case ListConstants.LIST_RECEIVED:
			console.log('LIST_RECEIVED');
      ListStore.replaceList(payload.list);
			ListStore.__emitChange();
			break;
		case ListConstants.LISTS_CLEARED:
			console.log('LISTS_CLEARED');
			ListStore.clearLists();
			ListStore.__emitChange();
			break;
		case ListConstants.TODO_RECEIVED:
			console.log('TODO_RECEIVED');
			ListStore.replaceList(payload.todo.list);
			console.log(_lists);
			ListStore.__emitChange();
			break;
  }
};

export default ListStore;
