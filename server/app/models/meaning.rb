class Meaning < ApplicationRecord
    belongs_to :question
    belongs_to :english
    belongs_to :portuguese
end
