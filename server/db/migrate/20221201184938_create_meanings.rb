class CreateMeanings < ActiveRecord::Migration[6.1]
  def change
    create_table :meanings do |t|
      t.text :definition
      t.integer :portuguese_id
      t.integer :english_id
      t.integer :question_id

      t.timestamps
    end
  end
end
