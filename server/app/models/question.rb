class Question < ApplicationRecord
    belongs_to :user
    has_many :meanings

    validates :question, presence: true
end