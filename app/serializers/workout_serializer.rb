class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :title, :exercises, :client
  has_many :workout_exercises
  has_many :exercises, through: :workout_exercises
  belongs_to :client
end
