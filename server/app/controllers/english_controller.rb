class EnglishController < ApplicationController

    def index
        english_words = English.all

        if session[:user_id]
        render json: english_words
        else
        render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end
end
