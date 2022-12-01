class CreateQuizzes < ActiveRecord::Migration[6.1]
  def change
    create_table :quizzes do |t|
      t.text :question
      t.string :meaning_id

      t.timestamps
    end
  end
end
