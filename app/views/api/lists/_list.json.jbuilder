json.extract!(
	list,
	:id, :name, :user_id
)

json.todos do
	json.array!(list.todos) do |todo|
		json.partial!('api/todos/todo', todo: todo)
	end
end
