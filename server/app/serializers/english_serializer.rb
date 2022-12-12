class EnglishSerializer < ActiveModel::Serializer
  attributes :id, :word
  has_many :meanings
  has_many :portugueses, through: :meanings
end
