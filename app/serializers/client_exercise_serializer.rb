class ClientExerciseSerializer < ActiveModel::Serializer
  attributes :id, :client_id, :exercise_id, :weight, :exercise, :recently_completed

  belongs_to :exercise
  # has_many :clients
end
