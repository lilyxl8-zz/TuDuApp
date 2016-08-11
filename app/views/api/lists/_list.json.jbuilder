json.extract!(
	list,
	:id, :name, :user_id
)

if show_todos ||= false
	json.todos do
		json.array!(list.todos) do |todo|
			json.partial!('api/todos/todo', todo: todo, show_list: false)
		end
	end
end
