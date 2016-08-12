User.destroy_all

user0 = User.create!(username: "Jim", password:"1234567")
user1 = User.create!(username: "user1", password:"1234567")
user2 = User.create!(username: "user2", password:"1234567")
user3 = User.create!(username: "user3", password:"1234567")
user4 = User.create!(username: "user4", password:"1234567")
user5 = User.create!(username: "user5", password:"1234567")
user6 = User.create!(username: "user6", password:"1234567")


List.destroy_all

list0 = List.create!(name: "Dat list", user_id: user0.id)
list1 = List.create!(name: "Dat list", user_id: user1.id)
list2 = List.create!(name: "Dat list", user_id: user2.id)
list3 = List.create!(name: "Dat list", user_id: user3.id)
list4 = List.create!(name: "Die Liste", user_id: user1.id)


Todo.destroy_all

Todo.create!(name:"buy milk", user_id: user0.id, list_id: list0.id)
Todo.create!(name:"don't buy milk", user_id: user0.id, list_id: list0.id)
Todo.create!(name:"buy cheese", user_id: user1.id, list_id: list1.id)
Todo.create!(name:"don't buy code", user_id: user0.id, list_id: list0.id)
Todo.create!(name:"please help", user_id: user2.id, list_id: list2.id)
Todo.create!(name:"I'm so sad", user_id: user3.id, list_id: list3.id)
Todo.create!(name:"Oh god they're coming", user_id: user3.id, list_id: list3.id)
Todo.create!(name:"Startle Lily", user_id: user1.id, list_id: list4.id)

print "seeded!"
