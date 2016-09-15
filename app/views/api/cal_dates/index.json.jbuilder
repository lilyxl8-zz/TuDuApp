json.array!(@cal_dates) do |cal_date|
	json.partial!('api/cal_dates/cal_date', cal_date: cal_date, show_todos: true)
end
