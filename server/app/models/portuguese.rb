class Portuguese < ApplicationRecord
    has_many :meanings
    has_many :englishes, through: :meanings
end
