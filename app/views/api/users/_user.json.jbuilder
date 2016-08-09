json.extract!(
  user,
  :id, :username
)
# json.lists do
# 	json.array!(user.lists) do |list|
# 		json.partial!('api/lists/list', list: list)
# 	end
# end
