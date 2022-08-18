class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :title, :exercises, :blocks, :client
  # has_many :workout_exercises
  # has_many :exercises, through: :workout_exercises
  belongs_to :client
  has_many :blocks
  has_many :workout_exercises, through: :blocks
end
