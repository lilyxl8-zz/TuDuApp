class Api::UsersController < ApplicationController

  # GET /users/new
  def new
    @user = User.new
  end

  # POST /users
  # POST /users.json
  def create
    @user = User.new(user_params)

      if @user.save
        login!(@user)
        render json: @user
      else
        format.json { render json: @user.errors, status: :unprocessable_entity }
        render :new
      end
    end
  end

  private
    # For the internet is dark and full of terrors.
    def user_params
      params.require(:user).permit(:username, :password)
    end
end
