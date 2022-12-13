class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :question

  has_many :user_questions
  has_many :users, through: :user_questions
end
