class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :title, :blocks, :client_id
  # has_many :workout_exercises
  # has_many :exercises, through: :workout_exercises
  belongs_to :client
  has_many :blocks
  has_many :workout_exercises
end
