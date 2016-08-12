json.extract!(
	todo,
	:id, :name, :list_id, :user_id, :done, :date
)

if show_list ||= false
	json.list do
		json.partial!('api/lists/list', list: todo.list, show_todos: true)
	end
end
