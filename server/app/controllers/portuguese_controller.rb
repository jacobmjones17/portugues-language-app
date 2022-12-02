class PortugueseController < ApplicationController

    def index
        portuguese_words = Portuguese.all

        if session[:user_id]
        render json: portuguese_words
        else
        render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end
end
