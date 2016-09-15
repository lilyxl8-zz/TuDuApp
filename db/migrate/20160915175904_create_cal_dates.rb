class CreateCalDates < ActiveRecord::Migration
  def change
    create_table :cal_dates do |t|
      t.date :full_date, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end

    add_index :cal_dates, :user_id
    add_index :cal_dates, :full_date
  end
end
