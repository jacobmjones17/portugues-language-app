class Quiz < ApplicationRecord
    belongs_to :meaning
    belongs_to :user
    has_many :englishes, through: :meaning
    has_many :portugueses, through: :meaning

    def quiz_answers
        quiz_obj = { 
            wrong_english_answers: English.joins(:meanings).where.not("meanings.definition = ?", "A way to greet someone"),
            wrong_portuguese_answers: Portuguese.joins(:meanings).where.not("meanings.definition = ?", "A way to greet someone"),
            correct_english_answers: self.englishes,
            correct_portuguese_answers: self.portugueses
        }
    end
end
