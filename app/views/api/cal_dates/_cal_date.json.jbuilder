json.extract!(
	cal_date,
	:full_date, :user_id, :id
)

if show_todos ||= false
	json.todos do
		json.array!(cal_date.todos) do |todo|
			json.partial!('api/todos/todo', todo: todo, show_list: false)
		end
	end
end
