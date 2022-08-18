class CreateBlocks < ActiveRecord::Migration[6.1]
  def change
    create_table :blocks do |t|
      t.string :count
      t.string :sets
      t.string :note
      t.integer :workout_id
      t.timestamps
    end
  end
end
