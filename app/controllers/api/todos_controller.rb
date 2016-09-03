class Api::TodosController < ApplicationController
  def index
    # For this to work, the date column needs to be an integer
    two_days = 172800000
    @todos = current_user.todos.where([
      "date > ? and date < ?",
      params[:date].to_i - (two_days),
      params[:date].to_i + (two_days)
    ])
    render :index
  end

  def new
    @todo = Todo.new
  end

  def create
    @todo = current_user.todos.new(todo_params)
		if @todo.save
			render :show
		else
			render json: {errors: @todo.errors.full_messages}, status: 422
		end
  end

  def update
    @todo = current_user.todos.find(params[:id])
		if @todo.update(todo_params)
			render :show
		else
			render json: {errors: @todo.errors.full_messages}, status: 422
		end
  end

  def destroy
    @todo = current_user.todos.find(params[:id])
		if @todo.destroy
			render json: { message: 'destroyed' }
		else
			render json: {errors: @todo.errors.full_messages}, status: 422
		end
  end

  def show
    @todo = todo.find(params[:id])
		render :show
  end

  private

  def todo_params
    params.require(:todo).permit(:name, :list_id, :date, :done)
  end

end
