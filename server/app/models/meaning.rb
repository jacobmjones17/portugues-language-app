class Meaning < ApplicationRecord
    has_many :questions
    belongs_to :english
    belongs_to :portuguese
end
