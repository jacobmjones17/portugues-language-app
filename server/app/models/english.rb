class English < ApplicationRecord
    has_many :meanings
    has_many :portugueses, through: :meanings
end
