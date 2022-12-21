class Meaning < ApplicationRecord
    has_many :questions
    belongs_to :english
    belongs_to :portuguese

    # def quiz_answers
    #     quiz_obj = {
    #         wrong_english_answer: English.joins(:meanings).where.not("meanings.definition = ?", "A way to greet someone"),
    #         wrong_portuguese_answer: Portuguese.joins(:meanings).where.not("meanings.definition = ?", "A way to greet someone"),
    #         correct_english_answer: self.english,
    #         correct_portuguese_answer: self.portuguese
    #     }
    # end

    def meaning_word_names
        self.english.word
        self.portuguese.palavra
    end
    
end

