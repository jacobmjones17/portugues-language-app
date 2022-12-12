class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :question, :meaning_id, :user_id
end
