import ListActions from '../actions/list_actions';

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

  createList: (list) => {
    $.ajax({
      type: 'POST',
      url: '/api/lists',
      dataType: 'json',
      data: { list: list },
      success: (newList) => {
        ListActions.listReceived(newList);
      }
    });
  },

	updateList: (list) => {
		$.ajax({
			type: 'PATCH',
			url: '/api/lists/' + list.id,
			dataType: 'json',
			data: { list: list },
			success: (newList) => {
				ListActions.listReceived(newList);
			}
		});
	},

	deleteList: (list) => {
		$.ajax({
			type: 'DELETE',
			url: 'api/lists' + list.id,
			dataType: 'json',
			data: {list: list},
			success: (deletedList) => {
				ListActions.removeList(deletedList);
			}
		});
	}

	createTodo: (todo) => {
		$.ajax({
      type: 'POST',
      url: '/api/todos',
      dataType: 'json',
      data: { todo },
      success: (newTodo) => {
        ListActions.todoReceived(newTodo); // TODO
      }
    });
	},

	updateTodo: (todo) => {
		$.ajax({
      type: 'PATCH',
      url: '/api/todos/' + todo.id,
      dataType: 'json',
      data: { todo },
      success: (updatedTodo) => {
        ListActions.todoReceived(updatedTodo);
      }
    });
	},

	deleteTodo: (todo) => {
		$.ajax({
			type: 'DELETE',
			url: '/api/todos/' + todo.id,
			dataType: 'json',
			success: () => {
				ListActions.todoDeleted(todo);
			}
		});
	}
};

export default ListUtil;
