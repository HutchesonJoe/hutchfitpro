class CreateClients < ActiveRecord::Migration[6.1]
  def change
    create_table :clients do |t|
      t.string :name
      t.string :email
      t.integer :age
      t.integer :feet
      t.integer :inches
      t.integer :weight
      t.string :fitness_level
      t.integer :workouts_per_week
      t.string :username
      t.string :assigned_password
      t.integer :trainer_id

      t.timestamps
    end
  end
end
