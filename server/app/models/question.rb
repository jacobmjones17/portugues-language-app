class Question < ApplicationRecord
    has_many :meanings
    has_many :user_questions
    has_many :users, through: :user_questions

    validates :question, presence: true
end
