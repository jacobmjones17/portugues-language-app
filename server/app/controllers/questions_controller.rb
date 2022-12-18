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

    def update
        question = question_params
        question.questions.each do |question_id|
            question_obj = {"user_id": question.student, "question_id": question_id}
            Question.create(question_obj)
        end


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
        params.permit(:student, :questions)
    end

end
