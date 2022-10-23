class CreateWorkouts < ActiveRecord::Migration[6.1]
  def change
    create_table :workouts do |t|
      t.string :title
      t.integer :client_id
      t.boolean :completed
      t.timestamps
      
    end
  end
end
