class MeaningsController < ApplicationController
    skip_before_action :authorize

    def index
        meanings = Meaning.all
        # byebug
        if session[:user_id]
            render json: meanings
        else
            render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end

end
