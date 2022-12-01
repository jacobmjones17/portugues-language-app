class Meaning < ApplicationRecord
    has_many :quizzes
    belongs_to: :english
    belongs_to: :portuguese
end
