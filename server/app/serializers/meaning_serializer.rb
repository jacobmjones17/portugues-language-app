class MeaningSerializer < ActiveModel::Serializer
  attributes :id, :definition

  has_many :questions
  belongs_to :english
  belongs_to :portuguese
  
end
