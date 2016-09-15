require 'date'

class CalDate < ActiveRecord::Base
  validates :full_date, presence: true
	validates :user_id, presence: true

  belongs_to :user
  has_many :todos,
    :class_name => "Todo",
    :foreign_key => :date,
    :primary_key => :full_date

  def self.find_or_create(current_user, date)
    query_date = current_user.cal_dates.find_by(full_date: date)
    unless query_date
      query_date = current_user.cal_dates.new(full_date: date)
      query_date.save
    end
    return query_date
  end
end
