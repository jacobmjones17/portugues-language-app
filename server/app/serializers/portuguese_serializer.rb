class PortugueseSerializer < ActiveModel::Serializer
  attributes :id, :palavra
  has_many :meanings
  has_many :englishes, through: :meanings
end
