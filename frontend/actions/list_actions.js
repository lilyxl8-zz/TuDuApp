import AppDispatcher from '../dispatcher/dispatcher';
import ListConstants from '../constants/list_constants';

const ListActions = {
	listsReceived (lists) {
		AppDispatcher.dispatch({
			actionType: ListConstants.LISTS_RECEIVED,
			lists: lists
		});
	}
};

export default ListActions;
