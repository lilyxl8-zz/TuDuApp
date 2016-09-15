class Todo < ActiveRecord::Base
  validates :name, presence: true
  validates :user_id, presence: true
  validate :list_or_date

  belongs_to :list
  belongs_to :user
  belongs_to :cal_date,
    :class_name => "CalDate",
    :foreign_key => :date,
    :primary_key => :full_date

  private
    def list_or_date
      unless list.blank? ^ date.blank?
        errors.add(:base, "To-do must belong to a List, Date or both")
      end
    end
end
