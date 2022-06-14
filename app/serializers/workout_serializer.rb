class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :title
  # has_many :clients 
  has_many :exercises
  has_many :client_workouts
end
