class Exercise < ApplicationRecord
  has_many :workout_exercises
  has_many :workouts, through: :workout_exercises

  has_many :client_exercises
  # has_many :clients, through: :client_exercises

end
