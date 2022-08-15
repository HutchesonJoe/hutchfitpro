class ClientExerciseSerializer < ActiveModel::Serializer
  attributes :id, :client_id, :exercise_id, :weight, :reps

  # has_many :exercises
  # has_many :clients
end
