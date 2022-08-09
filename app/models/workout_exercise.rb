class WorkoutExercise < ApplicationRecord
  belongs_to :workout
  belongs_to :exercise

  has_many :client_workouts
  has_many :workouts, through: :client_workouts
end
