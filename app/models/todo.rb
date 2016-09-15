class Todo < ActiveRecord::Base
  validates :name, presence: true
  validates :user_id, presence: true

  belongs_to :list
  belongs_to :user
  belongs_to :cal_date,
    :class_name => "CalDate",
    :foreign_key => :date,
    :primary_key => :full_date

  validate :list_or_date
  private
    def list_or_date
      # TODO
      # print :user
      # if :cal_date
      #   CalDate.find_or_create(:user, :cal_date)
      # end
      unless list.blank? ^ date.blank?
        errors.add(:base, "To-do must belong to a List, Date or both")
      end
    end
end
