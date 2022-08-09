class ClientExerciseSerializer < ActiveModel::Serializer
  attributes :id, :client_id, :exercise_id

  # has_many :exercises
  # has_many :clients
end
