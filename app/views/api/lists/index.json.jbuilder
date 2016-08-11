json.array!(@lists) do |list|
	json.partial!('api/lists/list', list: list, show_todos: true)
end
