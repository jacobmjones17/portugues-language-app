class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :question

  belongs_to :user
  has_many :meanings
end
