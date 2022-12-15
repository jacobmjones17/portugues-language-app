class Question < ApplicationRecord
    belongs_to :meaning
    has_many :user_questions
    has_many :users, through: :user_questions

    validates :question, presence: true
end