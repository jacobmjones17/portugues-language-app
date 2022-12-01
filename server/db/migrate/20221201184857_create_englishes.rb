class CreateEnglishes < ActiveRecord::Migration[6.1]
  def change
    create_table :englishes do |t|
      t.string :word

      t.timestamps
    end
  end
end
