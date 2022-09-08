class BlockSerializer < ActiveModel::Serializer
  attributes :id, :count, :sets, :note, :workout_exercises
  has_many :workout_exercises
  
end
