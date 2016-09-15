class Api::CalDatesController < ApplicationController
  before_action :require_logged_in

  def index
    @cal_dates = current_user.cal_dates
    render :index
  end

  def show
    @cal_date = CalDate.find_or_create(current_user, Date.parse(params[:id]))
    render :show
  end

  # def new
  #   @cal_date = CalDate.new
  # end

  # def create - HANDLED BY TodosController
  #   @cal_date = current_user.cal_dates.new(cal_date_params)
  #   if @cal_date.save
  #     render :show
  #   else
  #     render json: {errors: @cal_date.errors.full_messages}, status: 422
  #   end
  # end

  # def update
  #   @cal_date = current_user.cal_dates.find(params[:id])
  #   if @cal_date.update(cal_date_params)
  #     render :show
  #   else
  #     render json: {errors: @cal_date.errors.full_messages}, status: 422
  #   end
  # end

  # def destroy
  #   @cal_date = current_user.cal_dates.find(params[:id])
  #   if @cal_date.destroy
  #     render :index
  #   else
  #     render json: {errors: @cal_date.errors.full_messages}, status: 422
  #   end
  # end

  # private
  #   def cal_date_params
  #     params.require(:cal_date).permit(:name)
  #   end
end
