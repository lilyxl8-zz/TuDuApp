import AppDispatcher from '../dispatcher/dispatcher';
import ListConstants from '../constants/list_constants';

const ListActions = {
	listsReceived (lists) {
		AppDispatcher.dispatch({
			actionType: ListConstants.LISTS_RECEIVED,
			lists: lists
		});
	},

	listReceived (list) {
		AppDispatcher.dispatch({
			actionType: ListConstants.LIST_RECEIVED,
			list: list
		});
	},

	clearLists () {
		AppDispatcher.dispatch({
			actionType: ListConstants.LISTS_CLEARED
		});
	}
};

export default ListActions;
