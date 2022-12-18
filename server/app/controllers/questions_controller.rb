class QuestionsController < ApplicationController
    before_action :authorize
    before_action :is_teacher, only: [:create, :update, :destroy]
    
    def create
        user = User.find_by(id: session[:user_id])
        if user
            question = user.questions.create(question_params)
            if question.valid?
            render json: question, status: :created
            else 
            render json: { errors: [question.errors.full_messages] }, status: :unprocessable_entity
            end
        else
            render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end

    def create_assignment
        UserQuestion.create(question_params)
    end

    def index
        questions = Question.all

        if session[:user_id]
            render json: questions
        else
            render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end

    def show
        question = Question.find_by(id: params[:id])
        if question
            render json: question
        else
        render json: { error:"question not found" }
        end 
    end

    def destroy
        question = Question.find_by(id: params[:id])
            
        question.destroy
            
        head:no_content
    end

    private 

    def question_params
        params.permit(:user_id, :question_id)
    end

end
