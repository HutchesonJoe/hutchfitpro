class CreateTrainers < ActiveRecord::Migration[6.1]
  def change
    create_table :trainers do |t|
      t.string :name
      t.string :username
      t.string :email
      t.string :certifications
      t.string :password_digest
      t.boolean :is_trainer
      t.timestamps
    end
  end
end
