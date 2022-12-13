class User < ApplicationRecord
    has_secure_password
    has_many :user_questions
    has_many :questions, through: :user_questions

    validates :username, uniqueness: true
    validates :username, presence: true
end
