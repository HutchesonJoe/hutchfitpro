class WorkoutExercise < ApplicationRecord
  # belongs_to :workout
  belongs_to :exercise
  belongs_to :block

  # belongs_to :client_exercise
end
