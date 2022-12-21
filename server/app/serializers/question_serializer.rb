class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :questions

  belongs_to :meaning
  has_many :user_questions
  has_many :users, through: :user_questions

  def portuguese_and_english
    self.meanings.map()
  end
  
end
