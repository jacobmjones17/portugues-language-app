class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  before_action :authorize
  # before_action :is_teacher, only {:create, :update, :delete}

  private

  def authorize
    @current_user = User.find_by(id: session[:user_id])

    render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
  end

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end

  def is_teacher
    user = User.find_by(id: session[:user_id])
    if user.admin == true
      session[:is_teacher] = true
    else
      render json: {errors: ["Unauthorized! Must be a Teacher!"]}, status: :unauthorized 
    end
  end

end
