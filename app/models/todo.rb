class Todo < ActiveRecord::Base
  validates :name, presence: true
  validates :user_id, presence: true
  validates :list_id, presence: true

  belongs_to :list
  belongs_to :user
end
