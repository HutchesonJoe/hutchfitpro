class CreateClientExercises < ActiveRecord::Migration[6.1]
  def change
    create_table :client_exercises do |t|
      t.integer :client_id
      t.integer :exercise_id

      t.timestamps
    end
  end
end
