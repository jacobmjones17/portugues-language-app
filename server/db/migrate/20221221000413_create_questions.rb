class CreateQuestions < ActiveRecord::Migration[6.1]
  def change
    create_table :questions do |t|
      t.text :question
      t.integer :meaning_id

      t.timestamps
    end
  end
end
