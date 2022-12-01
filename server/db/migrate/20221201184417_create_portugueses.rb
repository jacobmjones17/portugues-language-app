class CreatePortugueses < ActiveRecord::Migration[6.1]
  def change
    create_table :portugueses do |t|
      t.string :word

      t.timestamps
    end
  end
end
