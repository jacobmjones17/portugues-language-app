class Portuguese < ApplicationRecord
    has_many :meanings
    has_many :englishes, through: :meanings
end
class Meaning < ApplicationRecord
    has_many :questions
    belongs_to :english
    belongs_to :portuguese
end
