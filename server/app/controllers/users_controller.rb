class UsersController < ApplicationController
    skip_before_action :authorize
    
    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            session[:is_teacher] = true
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end
    
    def show
        user = User.find_by(id: session[:user_id])
        if user
        render json: user
        else
        render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def index
        user = User.find_by(id: session[:user_id])
        all_students = User.select { |user| !user.admin}
        byebug
        if user.admin == true
            render json: all_students
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

private

    def user_params
        params.permit(:username, :password, :password_confirmation, :admin)
    end

    
end
