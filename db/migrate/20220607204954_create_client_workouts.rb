class CreateClientWorkouts < ActiveRecord::Migration[6.1]
  def change
    create_table :client_workouts do |t|
      t.integer :workout_id
      t.integer :client_id
      t.string :workout_title
      t.boolean :completed

      t.timestamps
    end
  end
end
