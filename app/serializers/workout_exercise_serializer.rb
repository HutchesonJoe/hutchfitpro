class WorkoutExerciseSerializer < ActiveModel::Serializer
  attributes :id, :block_id, :exercise_id, :exercise
  belongs_to :block 
  belongs_to :exercise
end
