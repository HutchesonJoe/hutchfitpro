class ClientSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :feet, :inches, :weight, :fitness_level, :workouts_per_week, :age, :username, :trainer_id, :is_trainer, :workouts, :client_exercises
  has_many :workouts
  # has_many :client_workouts
  has_many :client_exercises
  # has_many :exercises
end
