class CreateQuestions < ActiveRecord::Migration[6.1]
  def change
    create_table :questions do |t|
      t.text :question
      t.integer :meaning_id
      t.text :incorrect_answer_one
      t.text :incorrect_answer_two
      t.text :incorrect_answer_three

      t.timestamps
    end
  end
end
