class English < ApplicationRecord
    has_many :meanings
    has many :portugueses, through: :meanings
end
