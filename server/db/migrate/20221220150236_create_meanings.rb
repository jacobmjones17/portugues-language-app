class CreateMeanings < ActiveRecord::Migration[6.1]
  def change
    create_table :meanings do |t|
      t.text :defintion
      t.integer :portuguese_id
      t.integer :english_id
      t.text :incorrect_answer_one
      t.text :incorrect_answer_two
      t.text :incorrect_answer_three

      t.timestamps
    end
  end
end
