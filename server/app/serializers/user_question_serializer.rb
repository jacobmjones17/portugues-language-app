class UserQuestionSerializer < ActiveModel::Serializer
  attributes :id

  belongs_to :user
  belongs_to :question
end
