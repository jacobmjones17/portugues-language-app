class QuestionsController < ApplicationController
    before_action :authorize
    before_action :is_teacher, only: [:create, :update, :destroy]
    
    def create
        question = Question.create(question_params)
        if question.valid?
            render json: question, status: :created
        else
            render json: { errors: [recipe.errors.full_messages] }, status: :unprocessable_entity
        end
    end

    def assignment
        assign_question = UserQuestion.create(assign_question_params)
        render json: assign_question
    end

    def update
        question = Question.find_by(id: params[:id]) 
        question.update(question_params)
        render json: question
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

    def assign_question_params
        params.permit(:user_id, :question_id)
    end

    def question_params
        params.permit(:question, :incorrect_answer_one, :incorrect_answer_two, :incorrect_answer_three, meaning_attributes: [:id, :definition, :english_id, :portuguese_id, :word, :palavra ])
    end

end
