class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :admin

  has_many :user_questions
  has_many :questions, through: :user_questions
end
