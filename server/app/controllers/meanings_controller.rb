class MeaningsController < ApplicationController
    
    def index
        meaning = Meaning.all

        if session[:user_id]
        render json: meaning
        else
        render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end

end
