class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.string :name, null: false
      t.integer :user_id, null: false
      t.date :date
      t.integer :list_id, null: false

      t.timestamps null: false
    end

    add_index :todos, :user_id
    add_index :todos, :list_id
  end
end
