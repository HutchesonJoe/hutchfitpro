class ClientSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :feet, :inches, :fitness_level, :workouts_per_week, :age 
  has_many :workouts
end
