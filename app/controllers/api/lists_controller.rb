class Api::ListsController < ApplicationController

  def new
    @list = List.new
  end

  def create
    @list = current_user.lists.new(list_params)
		if @list.save
			render :show
		else
			render json: {errors: @list.errors.full_messages}, status: 422
		end
  end

  def update
    @list = current_user.lists.find(params[:id])
		if @list.update(list_params)
			render json: @list
		else
			render json: {errors: @list.errors.full_messages}, status: 422
		end
  end

  def destroy
    @list = current_user.lists.find(params[:id])
		if @list.destroy
			render :index
		else
			render json: {errors: @list.errors.full_messages}, status: 422
		end
  end

  def show
    @list = list.find(params[:id])
		render json: @list
  end

  private
    def list_params
      params.require(:list).permit(:name)
    end
end
