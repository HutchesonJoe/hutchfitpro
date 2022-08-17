class ClientExercise < ApplicationRecord
  
  belongs_to :client
  belongs_to :exercise
  
  # has_many :client_workouts
  # has_many :workouts_exercises
  # has_many :workouts, through: :workout_exercises

end
