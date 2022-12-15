class MeaningSerializer < ActiveModel::Serializer
  attributes :id, :definition, :quiz_answers
  belongs_to :question
  belongs_to :english
  belongs_to :portuguese
end
