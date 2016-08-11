import ListActions from '../actions/list_actions';
import SessionStore from '../stores/session_store';

const ListUtil = {
	fetchUserLists: () => {
		$.ajax({
			type: 'GET',
			url: '/api/lists',
			dataType: 'json',
			success: (lists) => {
				ListActions.listsReceived(lists);
			}
		});
	},

  createList: (name) => {
    $.ajax({
      type: 'POST',
      url: '/api/lists',
      dataType: 'json',
      data: { name: name },
      success: (list) => {
        ListActions.listReceived(list);
      }
    });
  },

	createTodo: (todo) => {
		$.ajax({
      type: 'POST',
      url: '/api/todos',
      dataType: 'json',
      data: { name: todo.name, list_id: todo.list_id },
      success: (todo) => {
        ListActions.listReceived(list); // TODO
      }
    });
	}
};

export default ListUtil;
