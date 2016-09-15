require 'date'

class CalDate < ActiveRecord::Base
  validates :full_date, presence: true
	validates :user_id, presence: true

  belongs_to :user
  has_many :todos,
    :class_name => "Todo",
    :foreign_key => :date,
    :primary_key => :full_date
end
