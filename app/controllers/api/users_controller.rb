class Api::UsersController < ApplicationController

  # GET /users/new
  def new
    @user = User.new
    render :new
  end

  # POST /users
  # POST /users.json
  def create
    @user = User.new(user_params)

    if @user.save
			@user.lists.create!(name: "Edit me!")
			@user.lists.first.todos.create!(
				name: "Add your todos here!", user_id: @user.id)
			@user.lists.first.todos.create!(
				name: "Click to mark me done!", user_id: @user.id)
			@user.lists.first.todos.create!(
				name: "Hover to edit me!", user_id: @user.id)
			@user.lists.first.todos.create!(
				name: "Hover to delete me!", done: true, user_id: @user.id)

			@user.lists.create!(name: "Groceries")
			@user.lists.last.todos.create!(name: "Buy milk", user_id: @user.id)
			@user.lists.last.todos.create!(name: "Buy cheese", user_id: @user.id)

      login!(@user)
      render json: @user
    else
      format.json { render json: @user.errors, status: :unprocessable_entity }
      render :new
    end
  end

	def show
		if params[:id].to_i == current_user.id
			@user = User.find(params[:id])
			render :show
		else
			if logged_in?
				render json: nil, status: 403
			else
				render json: nil, status: 401
			end
		end

	end

  private
    # For the internet is dark and full of terrors.
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
