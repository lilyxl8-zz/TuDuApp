json.extract!(
	todo,
	:id, :name, :list_id, :user_id, :done, :date
)
## show List or Date
if todo.list && show_list ||= false
	json.list do
		json.partial!('api/lists/list', list: todo.list, show_todos: true)
	end
end

if todo.date && show_date ||= false
	json.cal_date do
		json.partial!('api/cal_dates/cal_date', cal_date: todo.cal_date, show_todos: true)
	end
end
