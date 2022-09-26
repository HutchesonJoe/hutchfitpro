class WorkoutExerciseSerializer < ActiveModel::Serializer
  attributes :id, :block_id, :exercise_id
  belongs_to :block 
end
