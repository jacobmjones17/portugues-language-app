class QuizController < ApplicationController
    def index
        questions = Question.all

        if session[:user_id]
        render json: questions
        else
        render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end
end
