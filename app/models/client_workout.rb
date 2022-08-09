class ClientWorkout < ApplicationRecord
  belongs_to :client
  belongs_to :workout
  has_many :workout_exercises
  has_many :exercises, through: :workout_exercises
end
