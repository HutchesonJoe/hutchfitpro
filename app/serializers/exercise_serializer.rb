class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :name, :instructions, :category

  # has_many :client_exercises
end
