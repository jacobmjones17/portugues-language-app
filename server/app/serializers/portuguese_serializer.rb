class PortugueseSerializer < ActiveModel::Serializer
  attributes :id, :word
  has_many :meanings
  has_many :englishes, through: :meanings
end
