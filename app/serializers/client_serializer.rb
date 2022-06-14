class ClientSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :feet, :inches, :weight, :fitness_level, :workouts_per_week, :age, :username, :assigned_password
  has_many :workouts
  has_many :client_workouts
end
