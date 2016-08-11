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
	}
};

export default ListActions;
